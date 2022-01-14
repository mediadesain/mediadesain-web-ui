
import { Injectable } from '@angular/core';
import firebase from "firebase/app";
import "firebase/auth";
import { Router } from '@angular/router';
import { DatabaseService } from './firebase-database.service';
import { GetDataInterface } from '../interfaces/database.interface';
import { UserInterface } from 'src/app/core/interfaces/user.interface';
import { StorageService } from './firebase-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public data: UserInterface;
  public isAuth: boolean;
  public uid: string;
  public message: string;

  constructor(
    private router: Router,
    private databaseSrvc: DatabaseService,
    private storageSrvc: StorageService
  ) {
    if (this.data === undefined)
      this.getDataAuth()
  }

  register(data: UserInterface, target: string) {
    firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then( (auth) => {
        if (auth.user) {
          data.dateregister = new Date().getTime();
          data.uid = auth.user.uid;
          data.iduser = 'USR' + auth.user.uid.substring(0, 5).toUpperCase() + data.dateregister;
          data.userid = data.fullname.substring(0,3) + auth.user.uid.substring(0, 5).toUpperCase();
          delete data.password
          this.databaseSrvc.writeDatabase({
            isShowAlert: false,
            url: '/v2/users/'+data.uid,
            type: 'set',
            value: data
          })
          // .finally( () => {
          //   this.router.navigate([target])
          // })
        }
      })
      .catch( (error) => {
          if (error.code == 'auth/email-already-in-use')
            this.message = 'Alamat email sudah terdaftar, silahkan masuk atau reset passwword';
          if (error.code =='auth/invalid-email')
            this.message = 'Pastikan alamat email sudah benar dan valid';
          if (error.code == 'auth/weak-password')
            this.message = 'Pastikan buat password';
          this.hideMessage();
      });
  }

  getDataAuth() {
    firebase.auth().onAuthStateChanged( (auth) => {
      if (auth) {
        firebase.database().ref('/v2/users/'+auth.uid).update({"datelogin": new Date().getTime()});
        const reference: GetDataInterface = { isArray: false, url: '/v2/users/' + auth.uid, /*query: false, key: '', value: ''*/ };
        this.databaseSrvc.getDatabase(reference).then(
          (user: UserInterface) => {
            if (user) {
              user._role = user.role.split(',');
              user._links = Object.values(user.links);
              if (user.avatar)
                  this.storageSrvc.fileUrl('/users/' + user.avatar).then( (url: string) => user._avatar = url );
              else
                user._avatar = '/assets/images/placeholder/profile.jpg';
              this.data = user;
            }
          }
        );
        this.isAuth = true;
      }
    });
  };

  login(value: {email: string, password: string}, target: string){
    firebase.auth().signInWithEmailAndPassword(value.email,value.password)
      .then( (auth) => {
        if (auth) {
          this.uid = auth.user.uid;
          this.isAuth = true;
          this.message = 'Masuk Berhasil';
          setTimeout( () => this.router.navigate([target]), 500)
        }
      })
      .catch( (error) => {
        this.isAuth = false;
        this.message = error.message;
        this.hideMessage();
      });
  }

  logout(target: string) {
    firebase.auth().signOut()
      .then( () => {
        this.data = null;
        this.isAuth = false;
        this.message = 'Terimaskasih, sampai jumpa !';
        this.hideMessage();
        this.router.navigate([target]);
      })
      .catch( (error) => {/*this.message = error.message*/});
  }

  resetPassword(email: string) {
    firebase.auth().sendPasswordResetEmail(email)
      .then( () => {
        this.message = 'Reset Pasword link telah dikirim ke alamat email';
        this.hideMessage();
      })
      .catch( (error) => {
        this.message = error.message;
        this.hideMessage();
      });
  }


  hideMessage() {
    setTimeout( () => this.message = null, 5000)
  }

}
