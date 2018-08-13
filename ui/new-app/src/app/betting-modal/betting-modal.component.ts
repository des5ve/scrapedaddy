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

  fullMatchUp: string = this.matchUp.awayTeamFullName + ' @ ' + this.matchUp.homeTeamFullName;
  moneyLine: string = "Moneyline";
  spread: string = "Spread";
  total: string = "Total";
  
  limboBets: any[] =[
    {
      "bet": "New York Giants",
      "typeOfBet": "Spread",
      "odds": "+6.5 (-115)",

    },
    {
      "bet": "Over 49",
      "typeOfBet": "Total",
      "odds": "-110",

    }
   
  ];
  
  
  closeResult: string;

  constructor(public activeModal: NgbActiveModal) { }

  toggleBet(value: string){
    this.showPlus = !this.showPlus;
    console.log(value.split(","));
    //Need to be able to add this array as an object to the above array
  }

  removeBet(): void{
    //code to remove an object from the array of bets
  }
  
  determineIsWinning(a, b, c): void{
    if (a > b+c){
      console.log("winner");
    } else {
      console.log("loser");
  }
}


}

