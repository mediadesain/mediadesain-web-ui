import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountComponent } from './my-account.component';
import { MyProjectComponent } from './my-project/my-project.component';

const routes: Routes = [
  { path: '', component: MyAccountComponent },
  { path: 'projek', component: MyProjectComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAccountRoutingModule { }
