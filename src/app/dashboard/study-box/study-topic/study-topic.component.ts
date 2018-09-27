import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-study-topic',
  templateUrl: './study-topic.component.html',
  styleUrls: ['./study-topic.component.css']
})
export class StudyTopicComponent implements OnInit {
  @Input() topicImage = '';

  constructor() { }

  ngOnInit() {
  }

}
