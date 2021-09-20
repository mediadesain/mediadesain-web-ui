import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnDetailComponent } from './learn-detail/learn-detail.component';
import { LearnComponent } from './learn.component';

const routes: Routes = [
  { path: '', component: LearnComponent },
  { path: ':classslug', component: LearnDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnRoutingModule { }
