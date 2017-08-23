import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-recruiters',
  templateUrl: './recruiters.component.html',
  styleUrls: ['./recruiters.component.css']
})
export class RecruitersComponent implements OnInit {
  resumeSource = environment.assetsUrl + '/jerrieyang_resume.rtf.zip';

  constructor() { }

  ngOnInit() {}

}
