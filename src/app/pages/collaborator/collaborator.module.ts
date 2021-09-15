import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollaboratorRoutingModule } from './collaborator-routing.module';
import { CollaboratorComponent } from './collaborator.component';


@NgModule({
  declarations: [
    CollaboratorComponent
  ],
  imports: [
    CommonModule,
    CollaboratorRoutingModule
  ]
})
export class CollaboratorModule { }
