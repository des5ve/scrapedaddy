import { Component, OnInit } from '@angular/core';
import {ScoresService} from "../services/scores.service";
import {MLBScore} from "../models/MLBScore";

@Component({
  selector: 'app-mlb-scores',
  templateUrl: './mlb-scores.component.html',
  styleUrls: ['./mlb-scores.component.css']
})
export class MlbScoresComponent implements OnInit {

  scores: MLBScore[];

  constructor(private scoresService: ScoresService) { }

  ngOnInit() {
    this.getScores();
  }

  private getScores(): void{
    this.scoresService.getMLBScores().subscribe(scores => {
      this.setScores(scores)}, (error => {
      console.error(error);
    }));
  }

  private setScores(scores: MLBScore[]): void{
    console.log(scores);
    this.scores = scores;
  }

}
