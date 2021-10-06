import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ModalLoginComponent } from './components/modal-login/modal-login.component';
import { OfflineMessageComponent } from './components/offline-message/offline-message.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CareerComponent } from './pages/public/career/career.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ModalLoginComponent,
    OfflineMessageComponent,
    PageNotFoundComponent,
    CareerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
