import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KelasRoutingModule } from './kelas-routing.module';
import { KelasComponent } from './kelas.component';


@NgModule({
  declarations: [
    KelasComponent
  ],
  imports: [
    CommonModule,
    KelasRoutingModule
  ]
})
export class KelasModule { }
