import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  imageSource = environment.assetsUrl + '/images/jyang.jpg';

  constructor() {

    // this.imageSource = this.platformLocation.pathname +'assets/images/somelogo.png';
  }

  ngOnInit() {

  }

}
