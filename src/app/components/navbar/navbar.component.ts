import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isPublic: boolean = true;
  constructor(
    private router: Router
  ) {
    this.router.events.pipe(
      filter( e => e instanceof NavigationEnd)
    ).subscribe( (navEnd: NavigationEnd) => {
      this.isPublic = navEnd.urlAfterRedirects.includes('/admin') ? false : true;
    })
  }

  ngOnInit(): void {
  }

}
