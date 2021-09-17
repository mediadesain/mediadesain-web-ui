import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentRoute;
  constructor(
    private router: Router
  ) {
    this.router.events.pipe(
      filter( event => event instanceof NavigationEnd)
    ).subscribe(
      event => this.currentRoute = event
    )
    
  }

  ngOnInit(): void {
  }

}
