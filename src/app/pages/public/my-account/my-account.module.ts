import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountComponent } from './my-account.component';
import { ProjectManagementComponent } from '../../../components/project-management/project-management.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    MyAccountComponent,
    ProjectManagementComponent
  ],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    FormsModule
  ]
})
export class MyAccountModule { }
