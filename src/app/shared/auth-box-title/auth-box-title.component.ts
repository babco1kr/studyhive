import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-auth-box-title',
  templateUrl: './auth-box-title.component.html',
  styleUrls: ['./auth-box-title.component.css']
})
export class AuthBoxTitleComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
