import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-techskill',
  templateUrl: './techskill.component.html',
  styleUrls: ['./techskill.component.scss']
})
export class TechskillComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public techImages = [
    { img: "../../assets/tech/html.png", desc: "" },
    { img: "../../assets/tech/css.png", desc: "" },
    { img: "../../assets/tech/js.png", desc: "" },
    { img: "../../assets/tech/git.png", desc: "" },
    { img: "../../assets/tech/angular.png", desc: "" },
    { img: "../../assets/tech/typescript.png", desc: "" },
    { img: "../../assets/tech/sass.png", desc: "" },
    { img: "../../assets/tech/bootstrap.png", desc: "" },
    { img: "../../assets/tech/materialdesign.png", desc: "" },
    { img: "../../assets/tech/predix.png", desc: "" },
    { img: "../../assets/tech/highcharts.png", desc: "" },
    { img: "../../assets/tech/d3.png", desc: "" },
    { img: "../../assets/tech/java.png", desc: "" },
    { img: "../../assets/tech/mongo.png", desc: "" },
    { img: "../../assets/tech/pg.png", desc: "" },

  ]

}
