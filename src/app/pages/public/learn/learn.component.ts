import { Component, OnInit } from '@angular/core';
import { ClassesService } from 'src/app/core/services/classes.service';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {
  
  filterBy : string[] = ['category', '_level']
  filterSelected = {}

  constructor(
    public classesSrvc: ClassesService
  ) {
  }

  ngOnInit(): void {
  }

}
