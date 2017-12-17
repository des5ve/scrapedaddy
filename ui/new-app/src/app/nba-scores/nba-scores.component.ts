import { Component, OnInit } from '@angular/core';
import {ScoresService} from "../services/scores.service";
import {NBAScore} from "../models/NBAScore";

@Component({
  selector: 'app-nba-scores',
  templateUrl: './nba-scores.component.html',
  styleUrls: ['./nba-scores.component.css']
})
export class NbaScoresComponent implements OnInit {

  scores: NBAScore[];

  constructor(private scoresService: ScoresService) { }

  ngOnInit() {
    this.getScores();
  }

  private getScores(): void{
    this.scoresService.getNBAScores().subscribe(scores => {
      this.setScores(scores)}, (error => {
      console.error(error);
    }));
  }

  private setScores(scores: NBAScore[]): void{
    console.log(scores);
    this.scores = scores;
  }

}
