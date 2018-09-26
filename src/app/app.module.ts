import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogoBoxComponent } from './logo-box/logo-box.component';
import { LoginCtaComponent } from './logo-box/login-cta/login-cta.component';
import { SignupCtaComponent } from './logo-box/signup-cta/signup-cta.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { ReturnBtnComponent } from './error-not-found/return-btn/return-btn.component';
import { SignupBoxComponent } from './signup-box/signup-box.component';
import { AuthBoxTitleComponent } from './shared/auth-box-title/auth-box-title.component';
import { LoginBoxComponent } from './login-box/login-box.component';
import { HomeBtnComponent } from './shared/home-btn/home-btn.component';
import { MatInputModule,
  MatCardModule,
  MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    LogoBoxComponent,
    LoginCtaComponent,
    SignupCtaComponent,
    ErrorNotFoundComponent,
    ReturnBtnComponent,
    SignupBoxComponent,
    AuthBoxTitleComponent,
    LoginBoxComponent,
    HomeBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
