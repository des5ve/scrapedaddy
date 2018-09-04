import { Component, OnInit } from '@angular/core';
import { ScoresService } from "../services/scores.service";
import { GolfScore } from "../models/GolfScore";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { BettingModalComponent } from '../betting-modal/betting-modal.component';

@Component({
  selector: 'app-golf-scores',
  templateUrl: './golf-scores.component.html',
  styleUrls: ['./golf-scores.component.css']
})
export class GolfScoresComponent implements OnInit {

  scores: GolfScore[];

  constructor(private scoresService: ScoresService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.getScores();
  }
  
  private getScores(): void{
    this.scoresService.getGolfScores().subscribe(scores => {
      this.setScores(scores)}, (error => {
        console.error(error);
      }));
    }
  
    private setScores(scores: GolfScore[]): void{
      console.log(scores);
      this.scores = scores;
    }

    open() {
      const modalRef = this.modalService.open(BettingModalComponent, { size: "lg"});
      modalRef.componentInstance.name = 'Shashank';
    }
}
