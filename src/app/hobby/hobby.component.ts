import { Component, OnInit } from '@angular/core';
import { hobbyConst } from 'src/environments/environment';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss']
})
export class HobbyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public hoobies = hobbyConst;

}
