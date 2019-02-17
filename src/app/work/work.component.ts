import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public workExperience = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/General_Electric_logo.svg/500px-General_Electric_logo.svg.png",
      title: "Senior Software Enginner - Lead Professional",
      duration: "(January 2018 - Present)",
      descItems: [
        "Work as a Full stack developer for Infosys Enterprise Gamification Platform (iEGP) and Infosys Enterprise Cognitive Platform (iECP).",
        "Work on REST API's development with microservice architecture principle. ",
        "Work as an Individual Contributor to solutionize No SQL based DB for iEGP along with architects.",
        "Conceptualize future roadmap of the product with help of various POC's and POV's",
        "Lead a team of 3 UI Developer alongwith user story and task management. ",
        "Work as an SME in Gamification to provide clients with various solutions towards their mundane processes."
      ]
    },

    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/2000px-Infosys_logo.svg.png",
      title: "Senior Systems Engineer",
      duration: "(Sep 2014 - January 2018)",
      descItems: [
        "Work as a Full stack developer for Infosys Enterprise Gamification Platform (iEGP) and Infosys Enterprise Cognitive Platform (iECP).",
        "Work on REST API's development with microservice architecture principle. ",
        "Work as an Individual Contributor to solutionize No SQL based DB for iEGP along with architects.",
        "Conceptualize future roadmap of the product with help of various POC's and POV's",
        "Lead a team of 3 UI Developer alongwith user story and task management. ",
        "Work as an SME in Gamification to provide clients with various solutions towards their mundane processes."
      ]
    }
  ]

}
