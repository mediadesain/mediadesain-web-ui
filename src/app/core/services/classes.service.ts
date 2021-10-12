import { Injectable } from '@angular/core';
import { GetDataInterface } from 'src/app/shared/interfaces/database.interface';
import { ClassInterface } from '../interfaces/class.interface';
import { DatabaseService } from 'src/app/shared/services/firebase-database.service';
import { StorageService } from 'src/app/shared/services/firebase-storage.service';
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
    private databaseSrvc: DatabaseService,
    private storageSrvc: StorageService,
    public classMaterialSrcv: ClassMaterialService
  ) {}

  getData(){
    // Get all data and set initial partial items
    const reference: GetDataInterface = { isArray: true, url: '/v2/classes', query: false, key: 'url', value: '' };
    this.databaseSrvc.getDatabase(reference).then(
      (classes: ClassInterface[]) => {
        classes.forEach((detail: ClassInterface) => {
          detail._level = detail.level.split(',');
          this.storageSrvc.fileUrl('/classes/' + detail.idclass + '/' + detail.files.photos.split(',')[0]).then( (url: string) => {
            detail._thumbnail = url;
          });
          this.databaseSrvc.getDatabase({ isArray: true, url: '/v2/materials', query: true, key: 'idclass', value: detail.idclass }).then(
            (materials) => detail._materialscount = materials.length
          );
        });
        this.data = classes.slice(this.showitem.start, this.showitem.end + this.showperitem);
        this.alldata = classes;
        this.showitem.end = this.showitem.end + this.showperitem;
      }
    );
  }

  getDataDetail(url: string){
    // Get Detail Item
    const reference: GetDataInterface = { isArray: false, url: '/v2/classes/', query: true, key: 'url', value: url };
    this.databaseSrvc.getDatabase(reference).then(
      (detail: ClassInterface) => {
        console.log('zxczxc',detail)
        this.detail = detail;
        this.storageSrvc.fileUrl('/classes/' + detail.idclass + '/' + detail.files.photos.split(',')[0]).then( (url: string) => {
          this.detail._thumbnail = url;
        });
        this.classMaterialSrcv.getData(detail.idclass)
      }
    );
  }

  loadMore(){
    // Get next partial items and marge to main data to show on page
    this.showitem.start = this.showitem.start + this.showperitem;
    this.showitem.end = this.showitem.end + this.showperitem;
    const more = this.alldata.slice(this.showitem.start, this.showitem.end);
    this.data = [...this.data, ...more];
  }

}
