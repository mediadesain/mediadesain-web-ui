import { Injectable } from '@angular/core';
import { ClassInterface, MaterialInterface } from '../interfaces/class.interface';

@Injectable({
  providedIn: 'root',
})
export class ClassMaterialService {
  alldata: ClassInterface[] = []; // All data loaded
  data: ClassInterface[] = []; // Partial data will showing on page
  detail: ClassInterface;
  showitem: { start: number, end: number } = {
    start: 0,
    end: 0
  }; // Partial item will show
  showperitem = 20; // Total items will show
  constructor(
  ) {}

  getData(id: string){
    const materials: MaterialInterface[] = [
      {
        "file": "",
        "id": "MTRLW8JQ25WEET",
        "idclass": "CDE1566270000000",
        "no": 1,
        "title": "Memahami Struktur Dasar HTML",
        "url": "http://raboninco.com/D2la",
        "video": "video-01.mp4",
        "videourl": "https://firebasestorage.googleapis.com/v0/b/media-desain.appspot.com/o/classes%2FCDE1566270000000%2Fvideo-01.mp4?alt=media&token=73a44bc0-033d-4268-a289-ef0de21e32e7"
      },
      {
        "file": "",
        "id": "MTRLOUAY2BTA1B",
        "idclass": "CDE1566270000000",
        "no": 2,
        "title": "Membuat Judul dan Paragraf dalam HTML",
        "url": "http://raboninco.com/D2m8",
        "video": "video-02.mp4",
        "videourl": "https://firebasestorage.googleapis.com/v0/b/media-desain.appspot.com/o/classes%2FCDE1566270000000%2Fvideo-02.mp4?alt=media&token=82049851-94d0-48cf-a6ee-f792cfa37735"
      },
      {
        "file": "",
        "id": "MTRL8HJ76KOOBH",
        "idclass": "CDE1566270000000",
        "no": 3,
        "title": "Text Formating Tag HTML (Cetak Tebal, Miring, Garis bawah etc)",
        "url": "http://raboninco.com/D2rM",
        "video": "video-03.mp4",
        "videourl": "https://firebasestorage.googleapis.com/v0/b/media-desain.appspot.com/o/classes%2FCDE1566270000000%2Fvideo-03.mp4?alt=media&token=312d2d9d-7ccc-4f4b-a750-4aae220b965d"
      },
      {
        "file": "",
        "id": "MTRLJ28N2ZCG3Y",
        "idclass": "CDE1566270000000",
        "no": 4,
        "title": "Cara Membuat List dan Memahami Atribut HTML",
        "url": "http://raboninco.com/D2rm",
        "video": "video-04.mp4",
        "videourl": "https://firebasestorage.googleapis.com/v0/b/media-desain.appspot.com/o/classes%2FCDE1566270000000%2Fvideo-04.mp4?alt=media&token=cb0db18f-8d65-4386-aa9f-3110d63b2da1"
      },
      {
        "file": "",
        "id": "MTRLRXIWN7RQCJ",
        "idclass": "CDE1566270000000",
        "no": 5,
        "title": "Cara Pasang Gambar & Manage Folder HTML",
        "url": "http://raboninco.com/D2sO",
        "video": "video-05.mp4",
        "videourl": "https://firebasestorage.googleapis.com/v0/b/media-desain.appspot.com/o/classes%2FCDE1566270000000%2Fvideo-05.mp4?alt=media&token=a09bb416-99ac-4b94-bfa0-e26bc0f5cec0"
      },
      {
        "file": "",
        "id": "MTRLWPK90FJY4P",
        "idclass": "CDE1566270000000",
        "no": 6,
        "title": "Cara membuat Link HTML",
        "url": "http://raboninco.com/D2tL",
        "video": "video-06.mp4",
        "videourl": "https://firebasestorage.googleapis.com/v0/b/media-desain.appspot.com/o/classes%2FCDE1566270000000%2Fvideo-06.mp4?alt=media&token=28116529-36c4-4d88-ac67-6efca5455d37"
      },
      {
        "file": "",
        "id": "MTRL8T8J785EKO",
        "idclass": "CDE1566270000000",
        "no": 7,
        "title": "Cara memasukan Video, Map, Website kedalam Halaman Website (Embed Iframe)",
        "url": "http://raboninco.com/D2tj",
        "video": "video-07.mp4",
        "videourl": "https://firebasestorage.googleapis.com/v0/b/media-desain.appspot.com/o/classes%2FCDE1566270000000%2Fvideo-07.mp4?alt=media&token=cf133f66-9846-49de-aac4-d191f489e32f"
      },
      {
        "file": "",
        "id": "MTRLBEP8LJTBR5",
        "idclass": "CDE1566270000000",
        "no": 8,
        "title": "Cara Membuat Form dalam HTML (Part1)",
        "url": "http://raboninco.com/23107429/html-008-2",
        "video": "video-08.mp4",
        "videourl": "https://firebasestorage.googleapis.com/v0/b/media-desain.appspot.com/o/classes%2FCDE1566270000000%2Fvideo-08.mp4?alt=media&token=27c973bb-b084-4d62-bd46-bc427651f3a2"
      },
      {
        "file": "",
        "id": "MTRLP38F4R5IU6",
        "idclass": "CDE1566270000000",
        "no": 9,
        "title": "Cara Membuat Form dalam HTML (Part2)",
        "url": "http://raboninco.com/23107429/html-009",
        "video": "video-09.mp4",
        "videourl": "https://firebasestorage.googleapis.com/v0/b/media-desain.appspot.com/o/classes%2FCDE1566270000000%2Fvideo-09.mp4?alt=media&token=d337261d-3904-48c3-b1bc-8fe7f4a591db"
      },
      {
        "file": "",
        "id": "MTRLO1LLQLFRVG",
        "idclass": "CDE1566270000000",
        "no": 10,
        "title": "Cara Membuat Table Dalam HTML",
        "url": "http://raboninco.com/23107429/html-010",
        "video": "video-10.mp4",
        "videourl": "https://firebasestorage.googleapis.com/v0/b/media-desain.appspot.com/o/classes%2FCDE1566270000000%2Fvideo-10.mp4?alt=media&token=98844959-3275-4a7e-8685-a5868fa1746d"
      },
      {
        "file": "",
        "id": "MTRLANA0WAR2IU",
        "idclass": "CDE1566270000000",
        "no": 11,
        "title": "Cara Grouping Dalam HTML",
        "url": "http://raboninco.com/141yE",
        "video": "video-11.mp4",
        "videourl": "https://firebasestorage.googleapis.com/v0/b/media-desain.appspot.com/o/classes%2FCDE1566270000000%2Fvideo-11.mp4?alt=media&token=7d30c969-9b92-448e-85ff-c393bfda1fd2"
      },
      {
        "file": "",
        "id": "MTRLKAEH2AWP1V",
        "idclass": "CDE1566270000000",
        "no": 12,
        "title": "Attribut ID & HTML5",
        "url": "http://raboninco.com/1QCgl",
        "video": "video-12.mp4",
        "videourl": "https://firebasestorage.googleapis.com/v0/b/media-desain.appspot.com/o/classes%2FCDE1566270000000%2Fvideo-12.mp4?alt=media&token=6f7eac41-e012-4c1a-a3ee-861be2bd6c07"
      },
      {
        "file": "",
        "id": "MTRLWZ1OWUB8ZN",
        "idclass": "CDE1566270000000",
        "no": 13,
        "title": "Menambahkan Catatan Komentar dalam HTML",
        "url": "http://raboninco.com/23107429/html-013",
        "video": "video-13.mp4",
        "videourl": "https://firebasestorage.googleapis.com/v0/b/media-desain.appspot.com/o/classes%2FCDE1566270000000%2Fvideo-13.mp4?alt=media&token=475bb543-cbac-4d8d-a6f5-ba91330b7765"
      }
    ];
    materials.sort( (a: any, b: any) => a.no - b.no );
    this.data = materials.slice(this.showitem.start, this.showitem.end + this.showperitem);
    this.alldata = materials;
    this.detail = this.data[0]
    this.showitem.end = this.showitem.end + this.showperitem;
  }

}
