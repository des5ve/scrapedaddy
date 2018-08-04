import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';


@Component({
  selector: 'app-betting-modal',
  templateUrl: './betting-modal.component.html',
  styleUrls: ['./betting-modal.component.css']
})

export class BettingModalComponent {

  showPlus: boolean = false;
  betPayload: string = "-290";
  inputBet: string = "Risk"; 
  outPutBet: string = "To Win"

  matchUp = {"awayTeamName": "DAL",
  "awayTeamFullName": "Dallas Cowboys",
  "awayTeamSpread": "-6.5(-115)",
  "awayTeamMoneyLine": "-290",
  "totalO": "O48.5 (-110)",
  "homeTeamName": "NYG",
  "homeTeamFullName":"New York Giants",
  "homeTeamSpread": "+6.5(-115)",
  "homeTeamMoneyLine": "+270",
  "totalU": "U48.5 (-110)"
  }
  //Variables to bind to created from Team Info

  fullMatchUp: string = this.matchUp.awayTeamFullName + '@' + this.matchUp.homeTeamFullName;
  
  
  limboBets: any[] =[
    {
      "teamName": "New York Giants",
      "line": "+6.5 (-115)",

    },
  //  {
  //     "teamName": "New York Giants",
  //      "line": 49,
  //    }
  ];
  
  
  closeResult: string;

  constructor(public activeModal: NgbActiveModal) { }

  toggleBet(value: string){
    this.showPlus = !this.showPlus;
    console.log(value);

  }


  addBet(){
    // this.betPayload = "+6.5 (-115)"
    console.log(this.betPayload);
  }

}

