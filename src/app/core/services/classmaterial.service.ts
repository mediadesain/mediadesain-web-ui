import { Injectable } from '@angular/core';
import { GetDataInterface } from 'src/app/shared/interfaces/database.interface';
import { DatabaseService } from 'src/app/shared/services/database.service';
import { StorageService } from 'src/app/shared/services/storage.service';
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
    private databaseSrvc: DatabaseService,
    private storageSrvc: StorageService
  ) {}

  getData(id: string){
    // Get all data and set initial partial items
    this.databaseSrvc.getDatabase({ isArray: true, url: '/v2/materials', query: true, key: 'idclass', value: id }).then(
      (materials: MaterialInterface[]) => {
        materials.sort( (a: any, b: any) => a.no - b.no );
        materials.forEach( (material: MaterialInterface) => {
          this.storageSrvc.fileUrl('/classes/' + id + '/' + material.video).then( (url: string) => {
            material.videourl = url;
          });
        });
        this.data = materials.slice(this.showitem.start, this.showitem.end + this.showperitem);
        this.alldata = materials;
        this.detail = this.data[0]
        this.showitem.end = this.showitem.end + this.showperitem;
      });
  }

  loadMore(){
    // Get next partial items and marge to main data to show on page
    this.showitem.start = this.showitem.start + this.showperitem;
    this.showitem.end = this.showitem.end + this.showperitem;
    const more = this.alldata.slice(this.showitem.start, this.showitem.end);
    this.data = [...this.data, ...more];
  }

}
