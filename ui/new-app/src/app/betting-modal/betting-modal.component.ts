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


  limboBets: any[] =[
    {
      "teamName": "New York Giants",
      "line": 6.5,

    },
    {
      "teamName": "New York Giants",
      "line": 49,
    }
  ];
  
  
  closeResult: string;

  constructor(public activeModal: NgbActiveModal) { }

  toggleBet(): void{
    this.showPlus = !this.showPlus;

  }


  addBet(){
    
  }

}