import { Component, OnInit } from '@angular/core';
import { ScoresService } from "../services/scores.service";
import { NHLScore } from "../models/NHLScore";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { BettingModalComponent } from '../betting-modal/betting-modal.component';

@Component({
  selector: 'app-nhl-scores',
  templateUrl: './nhl-scores.component.html',
  styleUrls: ['./nhl-scores.component.css']
})
export class NhlScoresComponent implements OnInit {

  scores: NHLScore[];

  constructor(private scoresService: ScoresService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.getScores();
  }

  private getScores(): void{
    this.scoresService.getNHLScores().subscribe(scores => {
      this.setScores(scores)}, (error => {
        console.error(error);
      }));
  }

  private setScores(scores: NHLScore[]): void{
    console.log(scores);
    this.scores = scores;
  }

  open() {
    const modalRef = this.modalService.open(BettingModalComponent, {size: "lg"});
    modalRef.componentInstance.name = 'Shashank';
  }
}
