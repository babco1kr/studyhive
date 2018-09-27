import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root'})
export class AuthService {
  private isAuthenticated = false;
  private token: string;
  private currentName: string;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getName() {
    return this.currentName;
  }

  createUser(email: string, password: string, firstName: string) {
    const authData: AuthData = {email: email, password: password, firstName: firstName};
    this.http.post('http://localhost:3000/api/user/signup', authData)
      .subscribe(response => {
        console.log(response);
      });
    this.router.navigate(['/']);
  }

  login(email: string, password: string) {
    const authData: AuthData = {email: email, password: password, firstName: null};
    this.http.post<{token: string, firstName: string}>('http://localhost:3000/api/user/login', authData)
      .subscribe(response => {
        const token = response.token;
        this.token = token;
        if (token) {
          this.isAuthenticated = true;
          this.currentName = response.firstName;
          this.authStatusListener.next(true);
          this.router.navigate(['/dashboard']);
        }
      });
  }

  logout() {
    this.token = null;
    this.currentName = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.router.navigate(['/']);
  }
}
