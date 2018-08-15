import { Component, OnInit, style } from '@angular/core';
import { GamesService } from "../services/games.service";
import { DocketProperties } from "../models/DocketProperties"

@Component({
  selector: 'app-betdocket',
  templateUrl: './betdocket.component.html',
  styleUrls: ['./betdocket.component.css']
})

export class BetdocketComponent implements OnInit {
  games: any[] = [
    {"gameId": 1, "league": 'NFL', "matchup": 'NYG@NYJ', "wager": 'NYG -4', 
    "isWinning": null, "isLineWinning": null, "isTotalWinning":null,
    "scoreTotal": null, "homeTeamPoints": null, "awayTeamPoints": null, "over": null,
    "line": null, "teamPickedPoints": null, "opponentPoints": null},
    //{"gameId": 2, "league": 'NFL', "matchup": 'GB@DEN', "wager": 'o41.5'},
    //{"gameId": 3, "league": 'NFL', "matchup": 'DAL@PHI', "wager": 'DAL 7.5'},
    //{"gameId": 4, "league": 'NBA', "matchup": 'PHX@MIA', "wager": 'o198'}
    ]
    isWinning: boolean;
    isTotalWinning: boolean;
    isLineWinning: boolean;
  constructor() { }

  ngOnInit() {
  this.determineIsLineWinning(17, 21, 3.5)
  this.determineIsTotalWinning(true, 47.5, 25, 23) 
  };

determineIsLineWinning(teamPickedPoints: number, opponentPoints: number, line: number): void{
  if (teamPickedPoints + line > opponentPoints){
    this.isLineWinning=true//winner
  } else {
    this.isLineWinning=false//loser
}
};
determineIsTotalWinning(over:boolean, scoreTotal:number, homeTeamPoints:number, awayTeamPoints:number): void{
  if (over = true){
    if (scoreTotal < homeTeamPoints + awayTeamPoints){
      this.isTotalWinning=true//winner
    } else {
      this.isTotalWinning=false//loser
    }
    }
  else if (over = false){
    if (scoreTotal > homeTeamPoints + awayTeamPoints){
      this.isTotalWinning=true//winner
    } else {
      this.isTotalWinning=false//loser
    }
    };

    
    if (this.isTotalWinning=true) {this.isWinning=true}
    else if (this.isLineWinning=true) {this.isWinning=true}
    else {this.isWinning= false}
}; 
}




