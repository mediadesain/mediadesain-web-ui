import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportUsComponent } from './support-us.component';

const routes: Routes = [{ path: '', component: SupportUsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportUsRoutingModule { }
