import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { LogoBoxComponent } from './logo-box/logo-box.component';
import { SignupBoxComponent } from './signup-box/signup-box.component';
import { LoginBoxComponent } from './login-box/login-box.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './shared/auth/auth.guard';

const appRoutes: Routes = [
  { path: '', component: LogoBoxComponent},
  { path: 'signup', component: SignupBoxComponent},
  { path: 'login', component: LoginBoxComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: '404', component: ErrorNotFoundComponent},
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
