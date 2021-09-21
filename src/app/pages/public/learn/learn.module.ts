import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnRoutingModule } from './learn-routing.module';
import { LearnComponent } from './learn.component';
import { LearnDetailComponent } from './learn-detail/learn-detail.component';


@NgModule({
  declarations: [
    LearnComponent,
    LearnDetailComponent
  ],
  imports: [
    CommonModule,
    LearnRoutingModule
  ]
})
export class LearnModule { }
