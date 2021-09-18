import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountComponent } from './my-account.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    MyAccountComponent,
    MyProjectComponent
  ],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    FormsModule
  ]
})
export class MyAccountModule { }
