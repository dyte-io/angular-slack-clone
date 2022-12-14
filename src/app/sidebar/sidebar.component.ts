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
  faMicrophone,
} from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../api.service';
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
  faMicrophone = faMicrophone;

  constructor(private ApiService: ApiService) {}

  ngOnInit(): void {}

  onSliderChange($event: any) {
    const isChecked = $event.target.checked;
    console.log(isChecked);

    //creating meeting
    if (isChecked) {
      this.ApiService.createMeeting().subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
