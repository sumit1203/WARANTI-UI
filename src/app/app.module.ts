import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderNavComponent } from './theme/layouts/header-nav/header-nav.component';
import { FooterComponent } from './theme/layouts/footer/footer.component';
import { AsideNavComponent } from './theme/layouts/aside-nav/aside-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    FooterComponent,
    AsideNavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
