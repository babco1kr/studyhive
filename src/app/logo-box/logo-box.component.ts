import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-logo-box',
  templateUrl: './logo-box.component.html',
  styleUrls: ['./logo-box.component.css']
})
export class LogoBoxComponent implements OnInit {

  isAuthenticated = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isAuthenticated = this.authService.getIsAuth();
  }

}
