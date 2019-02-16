import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public icons = [
    { iconpath: "../../assets/icons/linkedin.png", link: "https://www.linkedin.com/in/vishal-chaturvedi-916b1478/" },
    { iconpath: "../../assets/icons/github.png", link: "https://github.com/vishalchaturvedi50" },
    { iconpath: "../../assets/icons/quora.png", link: "https://vishalchaturvedi50.quora.com/" },
    { iconpath: "../../assets/icons/gmail.png", link: "mailto:vishalchaturvedi50@gmail.com" },
    { iconpath: "../../assets/icons/facebook.png", link: "https://www.facebook.com/chaturvedi.vishal4" }
  ]

}
