import { Component, OnInit } from '@angular/core';
import { GamesService } from "../services/games.service";

@Component({
  selector: 'app-betdocket',
  templateUrl: './betdocket.component.html',
  styleUrls: ['./betdocket.component.css']
})
export class BetdocketComponent implements OnInit {


  games: any[] = [
    {"gameId": 1, "league": 'NFL', "matchup": 'NYG@NYJ', "wager": 'NYG -4'},
    {"gameId": 2, "league": 'NFL', "matchup": 'GB@DEN', "wager": 'o41.5'},
    {"gameId": 3, "league": 'NFL', "matchup": 'DAL@PHI', "wager": 'DAL 7.5'},
    {"gameId": 4, "league": 'NBA', "matchup": 'PHX@MIA', "wager": 'o198'}
]
  constructor() { }

  ngOnInit() {
  }

}
