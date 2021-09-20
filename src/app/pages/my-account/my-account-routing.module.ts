import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountComponent } from './my-account.component';
import { ProjectManagementComponent } from '../../components/project-management/project-management.component';

const routes: Routes = [
  { path: '', component: MyAccountComponent },
  { path: 'projek', component: ProjectManagementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAccountRoutingModule { }
