import { Injectable } from '@angular/core';
import { GetDataInterface } from 'src/app/shared/interfaces/database.interface';
import { DatabaseService } from 'src/app/shared/services/database.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ProjectInterface } from '../interfaces/project.interface';
import { ClassMaterialService } from './classmaterial.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  alldata: ProjectInterface[] = []; // All data loaded
  data: ProjectInterface[] = []; // Partial data will showing on page
  detail: ProjectInterface;
  showitem: { start: number, end: number } = {
    start: 0,
    end: 0
  }; // Partial item will show
  showperitem = 10; // Total items will show
  constructor(
    private databaseSrvc: DatabaseService,
    private storageSrvc: StorageService,
    public classMaterialSrcv: ClassMaterialService
  ) {
    if (this.alldata.length == 0){
      this.getData()
    }
  }

  getData(){
    // Get all data and set initial partial items
    const reference: GetDataInterface = { isArray: true, url: '/v2/projects'/*, query: true, key: 'status', value: 'published'*/ };
    this.databaseSrvc.getDatabase(reference).then(
      (projects: ProjectInterface[]) => {
        projects.forEach((project: ProjectInterface) => {
          project._category = project.category.split(',');
          if (project.postthumb)
            this.storageSrvc.fileUrl('/projects/' + project.postthumb).then( (url: string) => project._postthumb = url );
          else
            project._postthumb = '/assets/images/placeholder/project.png';
        });
        this.alldata = projects;
        this.data = projects.filter(project=>project.status==='published').slice(this.showitem.start, this.showitem.end + this.showperitem);
        this.showitem.end = this.showitem.end + this.showperitem;
      }
    );
  }

  getDataDetail(id: string){
    // Get Detail Item
    const reference: GetDataInterface = { isArray: false, url: '/v2/projects/' + id, /*query: false, key: '', value: ''*/ };
    this.databaseSrvc.getDatabase(reference).then(
      (detail: ProjectInterface) => {
        detail._category = detail.category.split(',');
        if (detail.postthumb)
            this.storageSrvc.fileUrl('/projects/' + detail.postthumb).then( (url: string) => detail._postthumb = url );
        else
          detail._postthumb = '/assets/images/placeholder/project.png';
        this.detail = detail;
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
