import { Injectable } from '@angular/core';
import { GetDataInterface } from 'src/app/shared/interfaces/database.interface';
import { UserInterface } from '../interfaces/user.interface';
import { DatabaseService } from 'src/app/shared/services/firebase-database.service';
import { StorageService } from 'src/app/shared/services/firebase-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  alldata: UserInterface[] = []; // All data loaded
  freelancer: {
    alldata: UserInterface[],
    data: UserInterface[],
    showitem: { start: number, end: number },
    showperitem: number
  } = {
    alldata: [],
    data: [],
    showitem: { start: 0, end: 0},
    showperitem: 10
  }
  tutor: {
    alldata: UserInterface[],
    data: UserInterface[],
    showitem: { start: number, end: number }, // Partial item will show
    showperitem: number
  } = {
    alldata: [],
    data: [],
    showitem: { start: 0, end: 0}, // Partial item will show
    showperitem: 10
  }
  detail: UserInterface;

  constructor(
    private databaseSrvc: DatabaseService,
    private storageSrvc: StorageService
  ) {
    if (this.alldata.length == 0){
      this.getData()
    }
  }

  getData(){
    // Get all data and set initial partial items
    const reference: GetDataInterface = { isArray: true, url: '/v2/users' /*, query: false, key: 'role', value: 'tutor'*/ };
    this.databaseSrvc.getDatabase(reference).then(
      (users: UserInterface[]) => {
        this.alldata = users;
        this.freelancer.alldata = [];
        this.tutor.alldata = [];
        users.forEach( (user: UserInterface) => {
          user._role = user.role.split(",");
          user._role.forEach( role => {
            if (role === 'freelancer')
              this.freelancer.alldata.push(user);
            if (role === 'tutor')
              this.tutor.alldata.push(user);
          });
          user._links = Object.values(user.links);
          if (user.avatar)
            this.storageSrvc.fileUrl('/users/' + user.avatar).then( (url: string) => user._avatar = url );
          else
            user._avatar = '/assets/images/placeholder/profile.jpg';
        });
        // Freelancer
        this.freelancer.data = this.freelancer.alldata.slice(this.freelancer.showitem.start, this.freelancer.showitem.end + this.freelancer.showperitem);
        this.freelancer.showitem.end = this.freelancer.showitem.end + this.freelancer.showperitem;
        // Tutor
        this.tutor.data = this.tutor.alldata.slice(this.tutor.showitem.start, this.tutor.showitem.end + this.tutor.showperitem);
        this.tutor.showitem.end = this.tutor.showitem.end + this.tutor.showperitem;
      }
    );
  }

  getDataDetail(id: string){
    // Get Detail Item
    const reference: GetDataInterface = { isArray: false, url: '/v2/users/', query: true, key: 'iduser', value: id };
    this.databaseSrvc.getDatabase(reference).then(
      (user: UserInterface) => {
        if (user.avatar)
          this.storageSrvc.fileUrl('/users/' + user.avatar).then( (url: string) => user._avatar = url );
        else
          user._avatar = '/assets/images/placeholder/profile.jpg';
        user._links = Object.values(user.links);
        this.detail = user;
      }
    )
  }

  loadMore(){
    // Get next partial items and marge to main data to show on page
    // this.showitem.start = this.showitem.start + this.showperitem;
    // this.showitem.end = this.showitem.end + this.showperitem;
    // const more = this.alldata.slice(this.showitem.start, this.showitem.end);
    // this.data = [...this.data, ...more];
  }

}
