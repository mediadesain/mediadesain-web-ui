import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-learn-detail',
  templateUrl: './learn-detail.component.html',
  styleUrls: ['./learn-detail.component.scss']
})
export class LearnDetailComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    const navState = this.router.getCurrentNavigation().extras.state;
    if (navState) {
      console.log('data state exsist:', navState)
    } else {
      this.activeRoute.paramMap.subscribe(params => {
        console.log('no state, get api:', params.get('classslug'))
      });
    }
  }

  ngOnInit(): void {
  }

}
