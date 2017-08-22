import { Component } from '@angular/core';
import { fadeIn } from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ fadeIn ]
})
export class AppComponent {
  title = 'app';
  view: string;

  constructor() {
    // this.view = 'recruiters';
  }
}
