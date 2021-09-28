import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2';
@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.scss']
})
export class ProjectManagementComponent implements OnInit {
  detail = {
    category: ['apple','orange'],
    posttitle: 'title project',
    postcontent: 'this is description of your project',
    type: 'freelance',
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

  deleteProject(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('delete')
      }
    })
  }

  submitProject(value: any) {
    console.log(value)
  }

}
