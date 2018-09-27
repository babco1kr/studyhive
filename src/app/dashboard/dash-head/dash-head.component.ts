import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'app-dash-head',
  templateUrl: './dash-head.component.html',
  styleUrls: ['./dash-head.component.css']
})
export class DashHeadComponent implements OnInit {

  userName;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userName = this.authService.getName();
  }

}
