import { Injectable } from '@angular/core';
import {Http, RequestOptionsArgs, Response} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {Score} from "../models/Score";


export interface iScoreService{
  getAllScores(): Observable<Score[]>;
}

@Injectable()
export class ScoresService implements iScoreService{

  SCORES : Score [] = [
    {gameId: 1, homeTeam: 'NYG', homeScore: 0, awayTeam: 'ATL', awayScore: 0, gameStatus: 'SCHEDULED', currentQuarter: 0, currentTime: '15:00', gameTime: '10-DEC-2017 8:30 EST', homeLosses: 2, homeWins: 0, awayWins: 2, awayLosses: 0},
    {gameId: 2, homeTeam: 'NYJ', homeScore: 0, awayTeam: 'NE', awayScore: 23, gameStatus: 'LIVE', currentQuarter: 2, currentTime: '15:00', gameTime: '10-DEC-2017 4:15 EST', homeLosses: 2, homeWins: 0, awayWins: 2, awayLosses: 0},
    {gameId: 3, homeTeam: 'WAS', homeScore: 10, awayTeam: 'PHI', awayScore: 0, gameStatus: 'FINAL', currentQuarter: 4, currentTime: '0:00', gameTime: '10-DEC-2017 1:00 EST', homeLosses: 2, homeWins: 0, awayWins: 2, awayLosses: 0}
  ]

  constructor(private http: Http) {
  }

  getAllScores(): Observable<Score[]>{
    const url = "https://metr-api.herokuapp.com/locations";
    return Observable.of(this.SCORES);
    //return this.http.get(url).map((res: Response) => res.json());
  }

  private clone(object : any){
    return JSON.parse(JSON.stringify(object));
  }

}
