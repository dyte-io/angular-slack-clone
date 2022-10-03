import { Component, OnInit } from '@angular/core';
import {
  faAngleDown,
  faComment,
  faComments,
  faAt,
  faPencil,
  faBuilding,
  faEllipsisVertical,
  faCaretDown,
  faHashtag,
  faPlus,
  faTowerBroadcast,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  faAngleDown = faAngleDown;
  faComment = faComment;
  faComments = faComments;
  faAt = faAt;
  faPencil = faPencil;
  faBuilding = faBuilding;
  faEllipsisVertical = faEllipsisVertical;
  faCaretDown = faCaretDown;
  faHashtag = faHashtag;
  faPlus = faPlus;
  faTowerBroadcast = faTowerBroadcast;

  constructor() {}

  ngOnInit(): void {}
}
