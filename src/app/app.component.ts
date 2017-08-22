import {AfterViewInit, Component} from '@angular/core';
import { fadeIn, fadeSlideIn } from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ fadeIn, fadeSlideIn ]
})
export class AppComponent implements AfterViewInit{
  title = 'app';
  isLoaded: boolean;
  view: string;

  constructor() {
    this.isLoaded = false;
  }

  ngAfterViewInit() {
    this.isLoaded = true;
  }


}
