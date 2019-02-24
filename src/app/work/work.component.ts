import { Component, OnInit } from '@angular/core';
import { workExperienceConst } from 'src/environments/environment';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public workExperience = workExperienceConst;

}
