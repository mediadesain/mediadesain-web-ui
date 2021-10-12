import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassesService } from 'src/app/core/services/classes.service';
import { ClassMaterialService } from 'src/app/core/services/classmaterial.service';

@Component({
  selector: 'app-learn-detail',
  templateUrl: './learn-detail.component.html',
  styleUrls: ['./learn-detail.component.scss']
})
export class LearnDetailComponent implements OnInit {
  activetab: string = 'description';
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    public classesSrvc: ClassesService,
    public classMaterialSrcv: ClassMaterialService
  ) {
    console.log(this.classMaterialSrcv)
    const navState = this.router.getCurrentNavigation().extras.state;
    if (navState) {
      // console.log('data state exsist:', navState)
      const data = this.router.getCurrentNavigation().extras.state;
      this.classMaterialSrcv.getData(data.idclass)
    } else {
      this.activeRoute.paramMap.subscribe(params => {
        // console.log('no state, get api:', params.get('classslug'))
        this.classesSrvc.getDataDetail(params.get('classslug'))
      });
    }
  }

  ngOnInit(): void {
  }

}
