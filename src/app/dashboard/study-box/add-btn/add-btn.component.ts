import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-btn',
  templateUrl: './add-btn.component.html',
  styleUrls: ['./add-btn.component.css']
})
export class AddBtnComponent implements OnInit {

  imgSrc = '../../../../assets/img/Artboard 1.png';

  constructor() { }

  ngOnInit() {
  }

  mouseOver() {
    this.imgSrc = '../../../../assets/img/comingsoon.png';
  }

  mouseOut() {
    this.imgSrc = '../../../../assets/img/Artboard 1.png';
  }

}
