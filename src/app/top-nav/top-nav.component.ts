import { Component, OnInit } from '@angular/core';
import {
  faMagnifyingGlass,
  faSliders,
  faArrowLeft,
  faArrowRight,
  faClock,
  faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  faSliders = faSliders;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faClock = faClock;
  faCircleQuestion = faCircleQuestion;

  constructor() {}

  ngOnInit(): void {}
}
