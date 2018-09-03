import { Component, OnInit, style } from '@angular/core';
import { GamesService } from '../services/games.service';
import { DocketProperties } from '../models/DocketProperties';

@Component({
  selector: 'app-betdocket',
  templateUrl: './betdocket.component.html',
  styleUrls: ['./betdocket.component.css']
})

export class BetdocketComponent implements OnInit {
  games: any[] = [
    {'gameId': 1,
    'league': 'NFL',
    'matchup': 'NYG@NYJ',
    'wager': 'NYG -4',
    'isWinning': null,
    'isLineWinning': null,
    'isTotalWinning': null,
    'scoreTotal': null,
    'homeTeamPoints': null,
    'awayTeamPoints': null,
    'over': null,
    'line': null,
    'teamPickedPoints': null,
    'opponentPoints': null}
    /**{'gameId': 2, 'league': 'NFL', 'matchup': 'GB@DEN', 'wager': 'o41.5'},
    {'gameId': 3, 'league': 'NFL', 'matchup': 'DAL@PHI', 'wager': 'DAL 7.5'},
    {'gameId': 4, 'league': 'NBA', 'matchup': 'PHX@MIA', 'wager': 'o198'}*/
    ];
    isTotalWinning: boolean;
    isLineWinning: boolean;
    isWinning: boolean;
  constructor() { }

  ngOnInit() {
  this.determineIsLineWinning(18, 21, 3.5);
  this.determineIsTotalWinning(false, 47.5, 25, 23);
  this.determineIsBetWinning(this.isTotalWinning, this.isLineWinning, this.isWinning);

  /** Added for testing, can be removed */
  /*console.log('determineIsLineWinning: ' + this.isLineWinning);
  console.log('determineIsTotalWinning: ' + this.isTotalWinning);
  console.log('isWinning ' + this.isWinning);*/
}

determineIsLineWinning(teamPickedPoints: number, opponentPoints: number, line: number): void {
  if ((teamPickedPoints + line) > opponentPoints) {
    this.isLineWinning = true; // winner
  } else {
    this.isLineWinning = false; // loser
  }
}

determineIsTotalWinning(over: boolean, scoreTotal: number, homeTeamPoints: number, awayTeamPoints: number): void {
  if (over) {
    if (scoreTotal < (homeTeamPoints + awayTeamPoints)) {
      this.isTotalWinning = true; // winner
    } else {
      this.isTotalWinning = false; // loser
    }
  } else {
    if (scoreTotal > (homeTeamPoints + awayTeamPoints)) {
      this.isTotalWinning = true; // winner
    } else {
      this.isTotalWinning = false; // loser
    }
  }
}

  determineIsBetWinning(isTotalWinning: boolean, isLineWinning: boolean, isWinning: boolean): void {
    if (this.isTotalWinning) {
      this.isWinning = true;
    } else if (this.isLineWinning) {
      this.isWinning = true;
    } else {
      this.isWinning = false;
    }
  }
}




