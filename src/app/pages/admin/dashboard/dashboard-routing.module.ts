import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProjectManagementComponent } from 'src/app/components/project-management/project-management.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, data: {title: 'Mediadesain - Dashboard'} },
  { path: 'kelas', loadChildren: () => import('../kelas/kelas.module').then(m => m.KelasModule) },
  { path: 'projek', component: ProjectManagementComponent, data: {title: 'Mediadesain - Projek'} },
  { path: 'inbox', loadChildren: () => import('../inbox/inbox.module').then(m => m.InboxModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
