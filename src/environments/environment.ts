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
  interfaces with cutting edge technologies and with Design Thinking as my main principle of work. Right from working
  on Products which caters to Business(B2B), Enterprise(B2E) or Consumers(B2C) to being an SME in Gamification trends
  I bring forward my thought leadership, functional knowledge and technological experience to the team I work with.
`,
    ` When I am not working I love to travel and make some music. I have been into music for quite a while and
traveling is my new passion. If you are interested to know more about my work or even if you are interested to know
my traveling stories (not many though) you can reach me out over an email.`
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
    title: "Senior Software Engineer - Lead Professional",
    duration: "(January 2018 - Present)",
    descItems: [
      {
        name: `Advanced Material Platform (AMP) : AMP is a digital material management repository to store materials metadata 
      and test information which provides a unique way of searching required material information to the researchers.`,
        responsibilities: [
          "Work with researchers to carve out potential modules in the product and then formulate them as user stories along with SCRUM team.",
          "Develop fast, cheap and clean UX in order to validate modules with stakeholders.",
          "Work along with architects to solutionize product and take trade-off decisions to build scalable, performant and optimized modules.",
          "Lead and mentor a team of 8 developers toward a common goal of developing a reliable, fast and state of the art product.",
          "Develop and enhance the security module for the product to handle export-controlled data.",
          "Drive a culture of effective code management with GitHub (Pull Requests, Code Reviews, Releases etc.)"
        ]
      },
      {
        name: `Reservior Dashboard : A dashboard which enables reservoir managers to visualize various energy metrics being generated by a Hybrid Power Plant.`,
        responsibilities: [
          `Architected and developed a performant and reliable solution along with researchers for a flat file system.`,
          `Developed the user interface for the application which has a unique way of showcasing energy metrics in real time with help of SVG.`,
          `Work as an Individual contributor to provide architectural solution for the application.`,
          `Lead the product development activities with help of Rally and Agile as methodology.`
        ]
      },

      {
        name: `Worked as an Individual contributor to solutionize and develop a platform for researchers to track their machine utilization.`,
        responsibilities: [
        ]
      },
      {
        name: `Worked as an Individual contributor to solutionize and develop a platform for leadership team to manage their metrics with help of a digital tool.`,
        responsibilities: [
        ]
      }
    ]
  },

  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/2000px-Infosys_logo.svg.png",
    title: "Senior Systems Engineer",
    duration: "(Sep 2014 - January 2018)",
    descItems: [
      {
        name: "Infosys Enterprise Gamification Platform (iEGP) : iEGP is a product in the area of digital engagement by Infosys which leverages gamification as a concept to provide a PAS (product as a service) solution to the clients.",
        responsibilities: [
          `Worked on two of the major releases of the product where I led and developed various feature/modules as a Full stack developer.`,
          `In situation to migrate SQL schema to No-SQL I worked with the Architect team to solutionize the same.`,
          `Work as an SME in gamification trends to help clients design their effective Gamification strategy.`,
          `Develop various POC's to demonstrate product capabilities in various segments such as knowledge management, banking, e-commerce.`
        ]
      },
      {
        name: "Infosys Enterprise Cognitive Platform (iECP) : iECP is a Congnitive platform offering by Infosys which provide various ML and AI algorithms as RESTful services.",
        responsibilities: [
          "Worked on conceptualizing product user interface alongwith User Experience team.",
          "Developed the product UI with Angular 2.x and marked the product as one of the early adopters of the Angular technology in the BU.",
        ]
      }
    ]
  }
];


export const educationConst = [

  {
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
];


export const hobbyConst = [
  "./../assets/hobby/re.png",
  "./../assets/hobby/music.png",
  "./../assets/hobby/movies.png",
  "../assets/hobby/book.png",
];


export const brandIconsConst = [
  { iconpath: "./../assets/icons/linkedin.png", link: "https://www.linkedin.com/in/vishal-chaturvedi-916b1478/" },
  { iconpath: "./../assets/icons/github.png", link: "https://github.com/vishalchaturvedi50" },
  { iconpath: "./../assets/icons/quora.png", link: "https://vishalchaturvedi50.quora.com/" },
  { iconpath: "./../assets/icons/gmail.png", link: "mailto:vishalchaturvedi50@gmail.com" },
  { iconpath: "./../assets/icons/facebook.png", link: "https://www.facebook.com/chaturvedi.vishal4" }
];