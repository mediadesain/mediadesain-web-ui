import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {
  activePage = 0;

  constructor() { }

  ngOnInit(): void {
  }

  login(data: any, target: string) {
    console.log(data, target)
  }

  forgotPassword(value: {email: string}) {
    console.log(value)
  }

  register(data: any, target: string) {
    console.log(data, target)
  }

}
