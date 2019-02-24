import { Component, OnInit } from '@angular/core';
import { techSkillsConst } from 'src/environments/environment';

@Component({
  selector: 'app-techskill',
  templateUrl: './techskill.component.html',
  styleUrls: ['./techskill.component.scss']
})
export class TechskillComponent implements OnInit {

  public techImages = [];

  constructor() { }

  ngOnInit() {
    this.techImages = techSkillsConst;
  }


}
