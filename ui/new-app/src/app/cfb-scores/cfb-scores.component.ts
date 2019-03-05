import { Component, OnInit } from '@angular/core';
import { ScoresService } from "../services/scores.service";
import { CFBScore } from "../models/CFBScore";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { BettingModalComponent } from '../betting-modal/betting-modal.component';

@Component({
  selector: 'app-cfb',
  templateUrl: './cfb-scores.component.html',
  styleUrls: ['./cfb-scores.component.css']
})
export class CfbScoresComponent implements OnInit {

  scores: CFBScore[];
  
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

  private setScores(scores: CFBScore[]): void{
    console.log(scores);
    this.scores = scores;
  }

  open() {
    const modalRef = this.modalService.open(BettingModalComponent, { size: "lg"});
    modalRef.componentInstance.name = 'Shashank';
  }
}


