import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportUsRoutingModule } from './support-us-routing.module';
import { SupportUsComponent } from './support-us.component';


@NgModule({
  declarations: [
    SupportUsComponent
  ],
  imports: [
    CommonModule,
    SupportUsRoutingModule
  ]
})
export class SupportUsModule { }
