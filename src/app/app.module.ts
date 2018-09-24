import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogoBoxComponent } from './logo-box/logo-box.component';
import { LoginCtaComponent } from './logo-box/login-cta/login-cta.component';
import { SignupCtaComponent } from './logo-box/signup-cta/signup-cta.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoBoxComponent,
    LoginCtaComponent,
    SignupCtaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
