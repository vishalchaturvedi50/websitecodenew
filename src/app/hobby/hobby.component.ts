import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss']
})
export class HobbyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public hoobies = [
    "./../assets/hobby/re.png",
    "./../assets/hobby/music.png",
    "./../assets/hobby/movies.png",
    "../assets/hobby/book.png",
  ]

}
