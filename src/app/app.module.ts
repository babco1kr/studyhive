import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogoBoxComponent } from './logo-box/logo-box.component';
import { LoginCtaComponent } from './logo-box/login-cta/login-cta.component';
import { SignupCtaComponent } from './logo-box/signup-cta/signup-cta.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { ReturnBtnComponent } from './error-not-found/return-btn/return-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoBoxComponent,
    LoginCtaComponent,
    SignupCtaComponent,
    ErrorNotFoundComponent,
    ReturnBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
