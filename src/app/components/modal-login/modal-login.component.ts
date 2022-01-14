import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {
  activePage = 0;
  selected = ['freelancer']

  constructor() { }

  ngOnInit(): void {
  }
  
  selectBox(target: string[], val: string) {
    var idx = target.indexOf(val);
    if (idx > -1) target.splice(idx, 1);
    else target.push(val);
  }

  login(data: any, target: string) {
    alert(JSON.stringify(data)+' and route to '+target)
  }

  forgotPassword(value: {email: string}) {
    alert(JSON.stringify(value));
  }

  register(data: any, target: string) {
    alert(JSON.stringify(data)+' and route to '+target);
  }

}
