// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

export const aboutMeConst = {
  heading: "About Me",
  sections: [

    `A Full Stack Web Developer with an Experience of over 4.5 Years, I hold a passion to develop flawless user
  interfaces with cutting edge technologies and with Design Thinking as my main principle of work.Right from working
  on Products which caters to Business(B2B), Enterprise(B2E) or Consumers(B2C) to being an SME in Gamification trends
  I bring forward my thought leadership, functional knowledge and technological experience to the team I work with.
`,
    ` When I am not working I love to travel and make some music. I have been into music for quite a while and
traveling is my new passion. If you are interested to know more about my work or even if you are interested to know
my traveling stories (not many though) you can reach me out over email.`
  ]
};

export const techSkillsConst = [
  { img: "./../assets/tech/html.png", desc: "" },
  { img: "./../assets/tech/css.png", desc: "" },
  { img: "./../assets/tech/js.png", desc: "" },
  { img: "./../assets/tech/git.png", desc: "" },
  { img: "./../assets/tech/angular.png", desc: "" },
  { img: "./../assets/tech/typescript.png", desc: "" },
  { img: "./../assets/tech/sass.png", desc: "" },
  { img: "./../assets/tech/bootstrap.png", desc: "" },
  { img: "./../assets/tech/materialdesign.png", desc: "" },
  { img: "./../assets/tech/predix.png", desc: "" },
  { img: "./../assets/tech/highcharts.png", desc: "" },
  { img: "./../assets/tech/d3.png", desc: "" },
  { img: "./../assets/tech/java.png", desc: "" },
  { img: "./../assets/tech/mongo.png", desc: "" },
  { img: "./../assets/tech/pg.png", desc: "" },
];


export const workExperienceConst = [
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
];