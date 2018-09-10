import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { LimboBet } from '../models/LimboBet';


@Component({
  selector: 'app-betting-modal',
  templateUrl: './betting-modal.component.html',
  styleUrls: ['./betting-modal.component.css']
})

export class BettingModalComponent {

  showPlus: boolean = false;
  inputBet: string = "Risk"; 
  outPutBet: string = "To Win"

  bettingMatchUp = {"awayTeamName": "DAL",
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

  fullMatchUp: string = this.bettingMatchUp.awayTeamFullName + ' @ ' + this.bettingMatchUp.homeTeamFullName;
  moneyLine: string = "Moneyline";
  spread: string = "Spread";
  total: string = "Total";
  betAmount : string = "";
  betToWin: string = this.betAmount;
  value: string = 'To win';
  
  limboBets: LimboBet[] = [];
  
  
  closeResult: string;

  constructor(public activeModal: NgbActiveModal) { }

  toggleBet(value: string){
    this.showPlus = !this.showPlus;
    const input = value.split(",");
    const limboBet = new LimboBet();
    limboBet.bet = input[0];
    limboBet.typeOfBet = input[1];
    limboBet.odds = input[2];
    this.limboBets.push(limboBet);
    console.log(limboBet);
    //Need to be able to add this array as an object to the above array
  }

  removeBet(indexOf: number): void{
    console.log(indexOf);
    this.limboBets.splice(indexOf, 1);
    console.log(this.limboBets);
  }
  
  onKey(value: string) {
    this.value =value;
  }
  

}

