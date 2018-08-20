import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-games-widget',
  templateUrl: './recent-games-widget.component.html',
  styleUrls: ['./recent-games-widget.component.css']
})
export class RecentGamesWidgetComponent implements OnInit {

  recentGames: any[] =[
  {
  "opponentLogo": "http://content.sportslogos.net/logos/7/167/full/960.png",
  "opponentName": "Eagles",
  "location": "@",
  "result": "W",
  "score": "42-28",
  },
  {
  "opponentLogo": "http://content.sportslogos.net/logos/7/167/full/960.png",
  "opponentName": "Eagles",
  "location": "@",
  "result": "W",
  "score": "42-28",
  }
  ]


  constructor() { }

  ngOnInit() {
  }

}
