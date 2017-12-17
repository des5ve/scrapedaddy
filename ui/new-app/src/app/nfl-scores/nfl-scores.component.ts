import { Component, OnInit } from '@angular/core';
import {ScoresService} from "../services/scores.service";
import {NFLScore} from "../models/NFLScore";

@Component({
  selector: 'app-nfl-scores',
  templateUrl: './nfl-scores.component.html',
  styleUrls: ['./nfl-scores.component.css']
})
export class NflScoresComponent implements OnInit {

  scores: NFLScore[];

  constructor(private scoresService: ScoresService) { }

  ngOnInit() {
    this.getScores();
  }

  private getScores(): void{
    this.scoresService.getNFLScores().subscribe(scores => {
      this.setScores(scores)}, (error => {
      console.error(error);
    }));
  }

  private setScores(scores: NFLScore[]): void{
    console.log(scores);
    this.scores = scores;
  }

}
