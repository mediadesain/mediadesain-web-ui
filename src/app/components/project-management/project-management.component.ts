import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.scss']
})
export class ProjectManagementComponent implements OnInit {
  detail = {
    category: ['apple','orange'],
    posttitle: '',
    postcontent: '',
    type: '',
    isShowprice: false,
    pricelow: 0,
    pricehight: 1,
    status: 'review',
    status_message: ""
  }

  constructor() { }
  
  ngOnInit(): void {
  }

  selectBox(target: string[], val: string) {
    var idx = target.indexOf(val);
    if (idx > -1) target.splice(idx, 1);
    else target.push(val);
  }

  submitProject(value: any) {
    console.log(value)
  }

}