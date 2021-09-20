import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfflineMessageComponent } from './components/offline-message/offline-message.component';
import { HomeModule } from './pages/home/home.module';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), data: {title: 'Mediadesain - Home'} },
  { path: 'kelas', loadChildren: () => import('./pages/learn/learn.module').then(m => m.LearnModule), data: {title: 'Mediadesain - Kelas'} },
  { path: 'kolaborasi', loadChildren: () => import('./pages/collaborator/collaborator.module').then(m => m.CollaboratorModule), data: {title: 'Mediadesain - Kolaborasi'} },
  { path: 'projek', loadChildren: () => import('./pages/projects/projects.module').then(m => m.ProjectsModule), data: {title: 'Mediadesain - Projek'} },
  { path: 'akun-saya', loadChildren: () => import('./pages/my-account/my-account.module').then(m => m.MyAccountModule), data: {title: 'Mediadesain - Akun Saya'} },
  { path: 'kebijakan-privasi', loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule), data: {title: 'Mediadesain - Kebijakan Privasi'} },
  { path: 'tentang-kami', loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule), data: {title: 'Mediadesain - Tentang Kami'} },
  { path: 'hubungi-kami', loadChildren: () => import('./pages/contact-us/contact-us.module').then(m => m.ContactUsModule), data: {title: 'Mediadesain - Hubungi Kami'} },
  { path: 'dukung-kami', loadChildren: () => import('./pages/support-us/support-us.module').then(m => m.SupportUsModule), data: {title: 'Mediadesain - Dukung Kami'}  },
  { path: 'offline', component: OfflineMessageComponent, data: {title: 'Mediadesain - Dukung Kami'}  },
  { path: 'admin', loadChildren: () => import('./pages/admin/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '**', component: OfflineMessageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}), HomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
