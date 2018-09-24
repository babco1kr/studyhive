import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogoBoxComponent } from './logo-box/logo-box.component';
import { LoginCtaComponent } from './logo-box/login-cta/login-cta.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoBoxComponent,
    LoginCtaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
