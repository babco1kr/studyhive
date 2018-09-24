import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-return-btn',
  templateUrl: './return-btn.component.html',
  styleUrls: ['./return-btn.component.css']
})
export class ReturnBtnComponent implements OnInit {

  constructor(private location: Location) { }

  onBackClick() {
    this.location.back();
  }

  ngOnInit() {
  }

}
