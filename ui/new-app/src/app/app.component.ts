import {Component, OnInit} from '@angular/core';
import {ScoresService} from "./services/scores.service";
import {Score} from "./models/Score";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  scores: Score[];

  constructor(private scoresService: ScoresService){

  }

  ngOnInit(): void{
    this.getScores();
  }

  private getScores(): void{
    this.scoresService.getAllScores().subscribe(scores => {
      this.setScores(scores)}, (error => {
          console.error(error);
    }));
  }

  private setScores(scores: Score[]): void{
    console.log(scores);
    this.scores = scores;
  }

  name = 'app';
}

