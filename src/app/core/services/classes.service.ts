import { Injectable } from '@angular/core';
import { ClassInterface } from '../interfaces/class.interface';
import { ClassMaterialService } from './classmaterial.service';

@Injectable({
  providedIn: 'root',
})
export class ClassesService {
  alldata: ClassInterface[] = []; // All data loaded
  data: ClassInterface[] = []; // Partial data will showing on page
  detail: ClassInterface;
  showitem: { start: number, end: number } = {
    start: 0,
    end: 0
  }; // Partial item will show
  showperitem = 2; // Total items will show
  constructor(
    public classMaterialSrcv: ClassMaterialService
  ) {
    if (this.alldata.length == 0){
      this.getData()
    }
  }

  getData(){
    const classes = [
      {
        "category":"software development",
        "content":"<p>Cara buat website dari yang tersulit sampai termudah.</p> <ol> <li>Full Coding</li> <li>CMS (Sontent Management System)</li> <li>Website builder yang tersedia oleh penyedia hosting domain</li> <li>Pakai jasa agency atau pakai temen-temen bisa gunakan services kami.</li> </ol>",
        "date":1565406000000,
        "dateupdate":1610461409048,
        "files":{
          "photos":"thumb.jpg",
          "videos":"video-01.mp4"
        },
        "idclass":"CDE1565406000000",
        "iduser":"USR8JPSY1589079600000",
        "keyword":"website, html, css, wordpress",
        "level":"dasar",
        "price":0,
        "status":"published",
        "title":"Cara Membuat Website Tersulit Sampai Termudah",
        "url":"cara-membuat-website-sulit-mudah",
        "_level":[
          "dasar"
        ],
        "_materialscount":1,
        "_thumbnail":"https://firebasestorage.googleapis.com/v0/b/media-desain.appspot.com/o/classes%2FCDE1565406000000%2Fthumb.jpg?alt=media&token=f4da8320-3a86-43c0-b135-dce9257ab273"
      },
      {
        "category":"software development",
        "content":"<p>Dalam pembuatan website dibutuhkan code seperti HTML, CSS, JS dsb. HTML itu Hypertext Marckup Language yang berguna sebagai keranka dalam sebuah website. Lebih detailnya akan dibahas syntac tag-tag yang digunakan dalam HTML</p>",
        "date":1566270000000,
        "dateupdate":1610461409048,
        "files":{
          "photos":"thumb.jpg",
          "videos":"video-01.mp4,video-02.mp4,video-03.mp4,video-04.mp4,video-05.mp4,video-06.mp4,video-07.mp4,video-08.mp4,video-09.mp4,video-10.mp4,video-11.mp4,video-12.mp4"
        },
        "idclass":"CDE1566270000000",
        "iduser":"USR8JPSY1589079600000",
        "keyword":"visual studio,html,css",
        "level":"dasar,menengah",
        "price":0,
        "status":"published",
        "title":"Memahami Struktur Dasar HTML",
        "url":"memahami-struktur-html",
        "_level":[
          "dasar",
          "menengah"
        ],
        "_materialscount":13,
        "_thumbnail":"https://firebasestorage.googleapis.com/v0/b/media-desain.appspot.com/o/classes%2FCDE1566270000000%2Fthumb.jpg?alt=media&token=456c0784-84af-49e6-b0fd-2423b5c0c91a"
      },
      {
        "category":"desain",
        "content":"<p>Kelas kali ini sangat berguna sekali untuk mempermudah pekerjaan desainer. Mulai dari penggunaan software grafis seperti adobe photosop free dan remove background menjadi transparent secara instan.</p>",
        "date":1603753882000,
        "dateupdate":1608454339091,
        "files":{
          "photos":"thumb.jpg",
          "videos":"video-01.mp4,video-02.mp4,video-03.mp4"
        },
        "idclass":"DGN1603753882000",
        "iduser":"USR8JPSY1589079600000",
        "keyword":"design, photopea, adobe photoshop, removebg",
        "level":"dasar",
        "price":0,
        "status":"published",
        "title":"Desain Grafis Hack ini mempermudah kerjaan desainer",
        "url":"desain-grafis-hack",
        "_level":[
          "dasar"
        ],
        "_materialscount":3,
        "_thumbnail":"https://firebasestorage.googleapis.com/v0/b/media-desain.appspot.com/o/classes%2FDGN1603753882000%2Fthumb.jpg?alt=media&token=f37c10b8-c08c-4b07-bc56-ff2033f6cac1"
      }
    ]
    this.data = classes.slice(this.showitem.start, this.showitem.end + this.showperitem);
    this.alldata = classes;
    this.showitem.end = this.showitem.end + this.showperitem;
  }

  getDataDetail(url: string){
    if(!this.data){
      this.getData();
    }
    this.detail = this.data.filter(item => item.url != url)[0];
    this.classMaterialSrcv.getData(this.detail.idclass);
  }

}
