import { Component, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { AuthService } from './shared/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'project';

  constructor(private elementRef: ElementRef, private authService: AuthService) {}

  ngOnInit() {
    this.authService.autoAuthUser();
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#FF5050';
  }
}
