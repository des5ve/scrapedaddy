import { Injectable } from '@angular/core';
import {Http, RequestOptionsArgs, Response} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import {NFLScore} from "../models/NFLScore";
import {NBAScore} from "../models/NBAScore";
import {MLBScore} from "../models/MLBScore";
import {NHLScore} from "../models/NHLScore";
import {GolfScore} from "../models/GolfScore";
import {CFBScore} from "../models/CFBScore";
import { HttpClient } from '@angular/common/http';


export interface iScoreService{
  getNFLScores(): Observable<NFLScore[]>;
  getNBAScores(): Observable<NBAScore[]>;
  getMLBScores(): Observable<MLBScore[]>;
  getNHLScores(): Observable<NHLScore[]>;
  getGolfScores(): Observable<GolfScore[]>;
  getCFBScores(): Observable<CFBScore[]>;
}

@Injectable()
export class ScoresService implements iScoreService{

  nfl_scores : NFLScore[] = [
    {gameId: 1, homeTeam: 'NYG', homeScore: 0, awayTeam: 'ATL', awayScore: 0, gameStatus: 'SCHEDULED', currentQuarter: 0, currentTime: '15:00',
      gameTime: '10-DEC-2017 8:30 EST', homeLosses: 2, homeWins: 0, awayWins: 2, awayLosses: 0, awayq1Score: 0, awayq2Score: 0, awayq3Score: 0, awayq4Score: 0,
      homeq1Score: 0, homeq2Score: 0, homeq3Score: 0, homeq4Score: 0},
    {gameId: 2, homeTeam: 'NYJ', homeScore: 0, awayTeam: 'NE', awayScore: 0, gameStatus: 'LIVE', currentQuarter: 2, currentTime: '15:00',
      gameTime: '10-DEC-2017 4:15 EST', homeLosses: 2, homeWins: 0, awayWins: 2, awayLosses: 0, awayq1Score: 10, awayq2Score: 0, awayq3Score: 0, awayq4Score: 0,
      homeq1Score: 3, homeq2Score: 0, homeq3Score: 0, homeq4Score: 0},
    {gameId: 3, homeTeam: 'WAS', homeScore: 0, awayTeam: 'PHI', awayScore: 0, gameStatus: 'FINAL', currentQuarter: 4, currentTime: '0:00',
      gameTime: '10-DEC-2017 1:00 EST', homeLosses: 2, homeWins: 0, awayWins: 2, awayLosses: 0, awayq1Score: 7, awayq2Score: 7, awayq3Score: 7, awayq4Score: 7,
      homeq1Score: 3, homeq2Score: 3, homeq3Score: 3, homeq4Score: 3}
  ]

  nba_scores : NBAScore[] = [
    {gameId: 1, homeTeam: 'ATL', homeScore: 98, awayTeam: 'CLE', awayScore: 96, gameStatus: 'FINAL', currentQuarter: 4, currentTime: '15:00',
      gameTime: '10-DEC-2017 7:30 EST', homeLosses: 2, homeWins: 0, awayWins: 2, awayLosses: 0, awayq1Score: 23, awayq2Score: 23, awayq3Score: 23, awayq4Score: 23,
      homeq1Score: 21, homeq2Score: 21, homeq3Score: 21, homeq4Score: 21},
    {gameId: 2, homeTeam: 'NYK', homeScore: 98, awayTeam: 'GS', awayScore: 98, gameStatus: 'SCHEDULED', currentQuarter: 0, currentTime: '15:00',
      gameTime: '10-DEC-2017 10:30 EST', homeLosses: 2, homeWins: 0, awayWins: 2, awayLosses: 0, awayq1Score: 23, awayq2Score: 23, awayq3Score: 23, awayq4Score: 23,
      homeq1Score: 21, homeq2Score: 32, homeq3Score: 32, homeq4Score: 32},
    {gameId: 3, homeTeam: 'CHA', homeScore: 76, awayTeam: 'PHI', awayScore: 70, gameStatus: 'LIVE', currentQuarter: 4, currentTime: '7:00',
      gameTime: '10-DEC-2017 8:00 EST', homeLosses: 2, homeWins: 0, awayWins: 2, awayLosses: 0, awayq1Score: 23, awayq2Score: 23, awayq3Score: 23, awayq4Score: 0,
      homeq1Score: 21, homeq2Score: 21, homeq3Score: 21, homeq4Score: 12}
  ]

  mlb_scores : MLBScore[] = [
    {gameId: 1, homeTeam: 'ATL', homeScore: 0, awayTeam: 'NYY', awayScore: 0, gameStatus: 'SCHEDULED', gameTime: '10-DEC-2017 8:30 EST',
      homeLosses: 2, homeWins: 0, awayWins: 2, awayLosses: 0, awayInning1: 0, awayInning2: 0, awayInning3: 0, awayInning4: 0, awayInning5: 0,
      awayInning6: 0, awayInning7: 0, awayInning8: 0, awayInning9: 0, homeInning1: 0, homeInning2: 0, homeInning3: 0, homeInning4: 0,
      homeInning5: 0, homeInning6: 0, homeInning7: 0, homeInning8: 0, homeInning9: 0, currentBalls: 0, currentInning: 0, currentOuts: 0,
      currentStrikes: 0},
    {gameId: 2, homeTeam: 'WAS', homeScore: 3, awayTeam: 'NYM', awayScore: 1, gameStatus: 'LIVE', gameTime: '10-DEC-2017 4:15 EST',
      homeLosses: 2, homeWins: 0, awayWins: 2, awayLosses: 0, awayInning1: 0, awayInning2: 0, awayInning3: 0, awayInning4: 0, awayInning5: 0,
      awayInning6: 0, awayInning7: 0, awayInning8: 0, awayInning9: 0, homeInning1: 0, homeInning2: 0, homeInning3: 0, homeInning4: 0,
      homeInning5: 0, homeInning6: 0, homeInning7: 0, homeInning8: 0, homeInning9: 0, currentBalls: 0, currentInning: 0, currentOuts: 0,
      currentStrikes: 0},
    {gameId: 3, homeTeam: 'LAD', homeScore: 7, awayTeam: 'HOU', awayScore: 1, gameStatus: 'FINAL', gameTime: '10-DEC-2017 1:00 EST',
      homeLosses: 2, homeWins: 0, awayWins: 2, awayLosses: 0, awayInning1: 0, awayInning2: 0, awayInning3: 0, awayInning4: 0, awayInning5: 0,
      awayInning6: 0, awayInning7: 0, awayInning8: 0, awayInning9: 0, homeInning1: 0, homeInning2: 0, homeInning3: 0, homeInning4: 0,
      homeInning5: 0, homeInning6: 0, homeInning7: 0, homeInning8: 0, homeInning9: 0, currentBalls: 0, currentInning: 0, currentOuts: 0,
      currentStrikes: 0}
  ]

  nhl_scores : NHLScore[] = [
    {gameId: 1, homeTeam: 'NYG', homeScore: 0, awayTeam: 'ATL', awayScore: 0, gameStatus: 'SCHEDULED', currentPeriod: 0, currentTime: '20:00',
      gameTime: '10-DEC-2017 8:30 EST', homeLosses: 2, homeWins: 0, awayWins: 2, awayLosses: 0, awayp1Score: 0, awayp2Score: 0, awayp3Score: 0,
      homep1Score: 0, homep2Score: 0, homep3Score: 0},
    {gameId: 2, homeTeam: 'NYJ', homeScore: 0, awayTeam: 'NE', awayScore: 0, gameStatus: 'LIVE', currentPeriod: 2, currentTime: '20:00',
      gameTime: '10-DEC-2017 4:15 EST', homeLosses: 2, homeWins: 0, awayWins: 2, awayLosses: 0, awayp1Score: 10, awayp2Score: 0, awayp3Score: 0,
      homep1Score: 3, homep2Score: 0, homep3Score: 0},
    {gameId: 3, homeTeam: 'WAS', homeScore: 0, awayTeam: 'PHI', awayScore: 0, gameStatus: 'FINAL', currentPeriod: 3, currentTime: '0:00',
      gameTime: '10-DEC-2017 1:00 EST', homeLosses: 2, homeWins: 0, awayWins: 2, awayLosses: 0, awayp1Score: 7, awayp2Score: 7, awayp3Score: 7,
      homep1Score: 3, homep2Score: 3, homep3Score: 3}
  ]  

  golf_scores : GolfScore[] = [
    {gameId: 1, player: 'D. Johnson', hole1score: 0, hole2score: 0, hole3score: 0, hole4score: 0, hole5score: 0, hole6score: 0, 
    hole7score: 0, hole8score: 0, hole9score: 0, hole10score: 0, hole11score: 0, hole12score: 0, hole13score: 0, 
    hole14score: 0, hole15score: 0, hole16score: 0, hole17score: 0, hole18score: 0, totalscore: 0},
  ]

  cfb_scores : CFBScore[] = [
    {gameId: 1, homeTeam: 'ALA', homeScore: 0, awayTeam: 'MIA', awayScore: 0, gameStatus: 'SCHEDULED', currentQuarter: 0, currentTime: '15:00',
      gameTime: '10-DEC-2017 8:30 EST', homeLosses: 2, homeWins: 0, awayWins: 2, awayLosses: 0, awayq1Score: 0, awayq2Score: 0, awayq3Score: 0, awayq4Score: 0,
      homeq1Score: 0, homeq2Score: 0, homeq3Score: 0, homeq4Score: 0},
    {gameId: 2, homeTeam: 'UVA', homeScore: 0, awayTeam: 'VT', awayScore: 0, gameStatus: 'LIVE', currentQuarter: 2, currentTime: '15:00',
      gameTime: '10-DEC-2017 4:15 EST', homeLosses: 2, homeWins: 0, awayWins: 2, awayLosses: 0, awayq1Score: 10, awayq2Score: 0, awayq3Score: 0, awayq4Score: 0,
      homeq1Score: 3, homeq2Score: 0, homeq3Score: 0, homeq4Score: 0},
    {gameId: 3, homeTeam: 'USC', homeScore: 0, awayTeam: 'UCLA', awayScore: 0, gameStatus: 'FINAL', currentQuarter: 4, currentTime: '0:00',
      gameTime: '10-DEC-2017 1:00 EST', homeLosses: 2, homeWins: 0, awayWins: 2, awayLosses: 0, awayq1Score: 7, awayq2Score: 7, awayq3Score: 7, awayq4Score: 7,
      homeq1Score: 3, homeq2Score: 3, homeq3Score: 3, homeq4Score: 3}
  ]

  constructor(private http: HttpClient) {}

  getNFLScores(): Observable<NFLScore[]>{
    const url = "https://metr-api.herokuapp.com/locations";
    return Observable.of(this.nfl_scores);
    //return this.http.get(url).map((res: Response) => res.json());
  }

  getNBAScores(): Observable<NBAScore[]>{
    const url = "https://metr-api.herokuapp.com/locations";
    return this.http.get(url).map((res: Response) => res.json());
  }

  getMLBScores(): Observable<MLBScore[]>{
    const url = "https://metr-api.herokuapp.com/locations";
    return Observable.of(this.mlb_scores);
    //return this.http.get(url).map((res: Response) => res.json());
  }

  getNHLScores(): Observable<NHLScore[]>{
    const url = "https://metr-api.herokuapp.com/locations";
    return Observable.of(this.nhl_scores);
  }

  getGolfScores(): Observable<GolfScore[]>{
    const url = "https://metr-api.herokuapp.com/locations";
    return Observable.of(this.golf_scores);
  }

  getCFBScores(): Observable<CFBScore[]>{
    const url = "https://metr-api.herokuapp.com/locations";
    return Observable.of(this.cfb_scores);
  }
}
