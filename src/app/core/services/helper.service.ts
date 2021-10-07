import { Injectable } from '@angular/core';
import { GetDataInterface } from 'src/app/shared/interfaces/database.interface';
import { DatabaseService } from 'src/app/shared/services/database.service';

interface Helper {
  cities?: string[];
  classcategories?: string[];
  projects?: string[];
  skills?: string[];
}

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  data: Helper;
  constructor(
    private databaseSrvc: DatabaseService,
  ) {
    this.getData()
  }

  getData(){
    // Get all data and set initial partial items
    const reference: GetDataInterface = { isArray: false, url: '/v2/helper'/*, query: true, key: 'status', value: 'published'*/ };
    this.databaseSrvc.getDatabase(reference).then(
      (data: any) => {
        const obj: Helper = {}
        obj.cities = Object.values(data.city);
        obj.classcategories = Object.values(data.classcategory);
        obj.projects = Object.values(data.project);
        obj.skills = Object.values(data.skill);
        const finaldata = Object.assign({}, obj)
        this.data = finaldata;
      }
    );
  }


}
