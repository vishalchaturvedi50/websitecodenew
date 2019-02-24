import { Component, OnInit } from '@angular/core';
import { brandIconsConst } from 'src/environments/environment';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public icons = brandIconsConst;

}
