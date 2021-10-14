import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'filter-checkbox',
  template: `
  <div *ngFor="let prop of filterBy" class="mb-3">
    <div class="filter-header">
      {{Title +' '+ prop.replace('_','')|titlecase}}
      <a *ngIf="filterSelected[prop]" href="javascript:void(0)" (click)="resetFilter(filterList,filterSelected,prop)">✕</a>
    </div>
    <div class="filter-content" *ngIf="filterList">
      <div class="form-check" *ngFor="let filter of filterList[prop]; let i = index">
          <input class="form-check-input"
              [id]="prop+i"
              type="checkbox"
              [value]="filter.property"
              [checked]="filter.ischecked"
              (change)="checkBoxFilter(filterSelected, prop, filter.property);filter.ischecked = !filter.ischecked;"
          >
          <label class="form-check-label" [for]="prop+i">{{filter.property|titlecase}}</label>
      </div>
    </div>
  </div>
  <div><button class="btn btn-primary" *ngIf="(filterSelected|json) != '{}'" (click)="resetAll(filterList,filterSelected, filterBy)">Reset All</button></div><!--filterSelected={}-->`
})
export class FilterCheckboxComponent implements OnInit {
  @Input() Title:any;
  @Input() data:any;
  @Input('FilterModel') filterBy:any;
  filterList:any = {}
  @Input('FilteredModel') filterSelected:any;

  constructor(
    public router: Router,
    public activeroute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.filterToCheckbox()
    this.checkByUrl()
  }

  filterToCheckbox(){
    //console.log(this.filterBy) = ['status','gender']
    this.filterBy.forEach( (prop:any) => {
      var getAllValue = this.data.map( (a:any) => a[prop] )
      var listval = [...new Set(getAllValue.flat())]
      this.filterList[prop] = listval;
    })
    //console.log(this.filterList) {'status':['publish'],'gender':['male','female]}
  }

  checkByUrl(){
    if(this.filterList){
      this.filterBy.forEach( (prop:string) => {
        var check:any = []
        this.filterList[prop].forEach( (val:string) => {
          var obj:any = {}
          obj['property']= val;
          this.activeroute.queryParams.subscribe( param => {
            if(param[prop] != undefined){
              var checkArrOrStr = param[prop].includes(',') ? param[prop].split(',') : [param[prop]]
              var isInclude = checkArrOrStr.map((a:any)=>a === val).includes(true)
              obj['ischecked']= isInclude ? true : false
            }
          })
          check.push(obj)
        });
        this.filterList[prop] = check;
      });

      //this.filterSelected = {};
      setTimeout(()=>{
        this.filterBy.forEach( (prop:string) => {
          this.filterSelected[prop] = this.filterList[prop].filter((a:any)=>a.ischecked).map((a:any)=>a.property)
          if(this.filterSelected[prop].length == 0)
            delete this.filterSelected[prop]
        });
      }, 500)
    }
  }

  checkBoxFilter(filterSelected:any, prop:string, val:string) {
    // ----- IF URL PARAMETER EMPTY ----- //
    this.router.navigate([], { 
      queryParams: {[prop]: val},
      queryParamsHandling: 'merge'
    })
    if(filterSelected[prop] == undefined)
      filterSelected[prop] = []

    // ----- IF URL PARAMETER EXSIEST ----- //
    var idx = filterSelected[prop].indexOf(val)
    if (idx > -1) {
      // Remove param value/s
      filterSelected[prop].splice(idx, 1)
      // Delete Param Key if no value/s
      if(filterSelected[prop].length==0)
        delete filterSelected[prop]

      // Remove to url queryParam
      this.router.navigate([], { 
        queryParams: {[prop]: filterSelected[prop] ? filterSelected[prop].join() : null},
        queryParamsHandling: 'merge'
      })
    }
    else {
      // Add param value/s
      filterSelected[prop].push(val)
      // Add to url queryParam
      this.router.navigate([], { 
        queryParams: {[prop]: filterSelected[prop].join()},
        queryParamsHandling: 'merge'
      })
    }
  }

  resetFilter(filter:any, filterSelected:any, prop:string){
    filter[prop].forEach( (a:any) => a.ischecked = false );
    delete filterSelected[prop]
    this.router.navigate([], { 
      queryParams: {[prop]: null},
      queryParamsHandling: 'merge'
    })
  }

  resetAll(filter:any, filterSelected:any, props:string[]){
    props.forEach( (prop) => {
      filter[prop].forEach( (a:any) => a.ischecked = false);
      delete filterSelected[prop]
      this.router.navigate([], { queryParams: {} })
    });
  }

}
