import { Component, OnInit } from '@angular/core';
import { portfolio } from 'src/environments/environment';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public portfolio = portfolio;

  constructor() { }

  ngOnInit() {
  }

}
