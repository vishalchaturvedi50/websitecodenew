import { Component, OnInit } from '@angular/core';
import { aboutMeConst } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  public aboutMe = aboutMeConst;

}
