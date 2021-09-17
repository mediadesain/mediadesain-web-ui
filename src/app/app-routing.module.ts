import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './pages/home/home.module';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'kelas', loadChildren: () => import('./pages/learn/learn.module').then(m => m.LearnModule) },
  { path: 'kolaborasi', loadChildren: () => import('./pages/collaborator/collaborator.module').then(m => m.CollaboratorModule) },
  { path: 'projek', loadChildren: () => import('./pages/projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'profile', loadChildren: () => import('./pages/my-account/my-account.module').then(m => m.MyAccountModule) },
  { path: 'kebijakan-privasi', loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule) },
  { path: 'tentang-kami', loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule) },
  { path: 'hubungi-kami', loadChildren: () => import('./pages/contact-us/contact-us.module').then(m => m.ContactUsModule) },
  { path: 'dukung-kami', loadChildren: () => import('./pages/support-us/support-us.module').then(m => m.SupportUsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}), HomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
