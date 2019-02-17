import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public education = [{
    title: "Bachelor of Technology | Hindustan Institute of Technology and Management, UPTU",
    duration: "August 2010 - May 2014",
    chipsData: [
      "Head college cultural society", "Drummer",
      "Member and later head of event management group",
      "Campus Ambassador TechKriti'14 IIT Kanpur"
    ]
  },
  {
    title: "Senior Secondary & Secondary Examinations | M.M. Sr. Sec. Public School CBSE",
    duration: "April 2007 - March 2010",
    chipsData: [
      "Head music and event club", "Member Debate Club "
    ]
  }
  ]

}
