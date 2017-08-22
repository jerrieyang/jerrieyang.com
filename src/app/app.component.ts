import {AfterViewInit, Component} from '@angular/core';
import { fadeIn, fadeSlideIn } from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ fadeIn, fadeSlideIn ]
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  isLoaded: Boolean = false;
  view: string;

  constructor() {

  }

  ngAfterViewInit() {
    this.isLoaded = true;
  }


}
