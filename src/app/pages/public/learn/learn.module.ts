import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnRoutingModule } from './learn-routing.module';
import { LearnComponent } from './learn.component';
import { LearnDetailComponent } from './learn-detail/learn-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from 'src/app/shared/pipes/_pipes.module';


@NgModule({
  declarations: [
    LearnComponent,
    LearnDetailComponent
  ],
  imports: [
    CommonModule,
    LearnRoutingModule,
    SharedModule,
    PipesModule
  ]
})
export class LearnModule { }
