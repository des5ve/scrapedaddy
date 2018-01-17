import { Component, OnInit } from '@angular/core';
import { ScoresService } from "../services/scores.service";
import { NFLScore } from "../models/NFLScore";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { BettingModalComponent } from '../betting-modal/betting-modal.component';

@Component({
  selector: 'app-nfl-scores',
  templateUrl: './nfl-scores.component.html',
  styleUrls: ['./nfl-scores.component.css']
})
export class NflScoresComponent implements OnInit {

  scores: NFLScore[];

  constructor(private scoresService: ScoresService,
              private modalService: NgbModal) { }

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

  open() {
    const modalRef = this.modalService.open(BettingModalComponent, { size: "lg" });
    modalRef.componentInstance.name = 'Shashank';
  }

}
