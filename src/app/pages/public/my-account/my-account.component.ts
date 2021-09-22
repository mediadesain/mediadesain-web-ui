import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  data:any = {
    "address" : "jl. Mantap Street",
    "avatar" : "USR8JPSY1589079600000.jpeg",
    "bio" : "I am Indonesian UI & FrontEnd designer. Lorem ipsum dolor amet",
    "city" : "kota jakarta timur",
    "datecreate" : 1611392425493,
    "dateregister" : 1589079600000,
    "dateupdate" : 1625762248290,
    "email" : "john@doe.com",
    "fullname" : "John Doe",
    "gender" : "pria",
    "iduser" : "USR8JPSY1589079600000",
    "links" : {
      "link1" : {
        "icon" : "globe-outline",
        "name" : "website",
        "url" : "https://www.johndoe.com/"
      },
      "link2" : {
        "icon" : "bookmark-outline",
        "name" : "bookmark",
        "url" : "https://www.johndoe.com/portfolio"
      },
      "link3" : {
        "icon" : "logo-instagram",
        "name" : "instagram",
        "url" : "https://www.instagram.com/johndoe"
      },
      "link4" : {
        "icon" : "logo-facebook",
        "name" : "facebook",
        "url" : "https://www.facebook.com/johndoe"
      }
    },
    "phoneno" : "08512345678",
    "phonenoshow" : true,
    "price" : {
      "tutor" : 85000
    },
    "role" : "freelancer,tutor",
    "skill" : "software developer",
    "skills" : "FrontEnd Developer, Coding, Desain",
    "software" : "Adobe Master, HTML, CSS, JavaSript, Angular",
    "uid" : "8jpSYFAeQcTcCDtFYKNAcW9pA3j2",
    "userid" : "johndoe",
    "_avatar" : "https://firebasestorage.googleapis.com/v0/b/media-desain.appspot.com/o/users%2FUSR8JPSY1589079600000.jpeg?alt=media&token=24851444-73f1-4137-896c-1047fdbc85cf",
    "_role" : ["freelancer","tutor"]
  }
  constructor() { }

  ngOnInit(): void {
  }

  isShowCropper: boolean = false;
  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {this.imageChangedEvent = event}
  imageCropped(event: ImageCroppedEvent) {
    this.isShowCropper = true;
    this.croppedImage = event.base64;
  }
  imageLoaded() {}
  cropperReady() {console.log('ready')}
  loadImageFailed() {console.log('filed')}

  cancel() {
    this.isShowCropper = false;
    this.imageChangedEvent = '';
    this.croppedImage = '';
  }
  selectCrop() {
    this.isShowCropper = false;
    this.imageChangedEvent = '';
    this.data._avatar = this.croppedImage;
  }

  selectBox(target: string[], val: string) {
    var idx = target.indexOf(val);
    if (idx > -1) target.splice(idx, 1);
    else target.push(val);
  }

  register(value: any) {
    console.log(value)
  }

}
