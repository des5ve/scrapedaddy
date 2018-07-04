import { Injectable } from '@angular/core';
import {Http, RequestOptionsArgs, Response} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import {NFLScore} from "../models/NFLScore";
import {NBAScore} from "../models/NBAScore";
import {MLBScore} from "../models/MLBScore";
import { HttpClient } from '@angular/common/http';


export interface iScoreService{
  getNFLScores(): Observable<NFLScore[]>;
  getNBAScores(): Observable<NBAScore[]>;
  getMLBScores(): Observable<MLBScore[]>;
}

@Injectable()
export class ScoresService implements iScoreService{

  constructor(private http: HttpClient) {}

  getNFLScores(): Observable<NFLScore[]>{
    const url = `scores/nfl`;
    return this.http.get<NFLScore[]>(url);
  }

  getNBAScores(): Observable<NBAScore[]>{
    const url = `scores/nba`;
    return this.http.get<NBAScore[]>(url);
  }

  getMLBScores(): Observable<MLBScore[]>{
    const url = `scores/mlb`;
    return this.http.get<MLBScore[]>(url);
  }

}
