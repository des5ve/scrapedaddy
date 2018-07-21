import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ScoresService } from '../services/scores.service';
import { NFLScore } from "../models/NFLScore";
import { NBAScore } from "../models/NBAScore";
import { NHLScore } from "../models/NHLScore";
import { MLBScore } from "../models/MLBScore";
import { GolfScore } from "../models/GolfScore";
import { BettingModalComponent } from "../betting-modal/betting-modal.component";

@Component({
  selector: 'app-wagers',
  templateUrl: './wagers.component.html',
  styleUrls: ['./wagers.component.css']
})
export class WagersComponent implements OnInit {

  constructor(private scoresService: ScoresService,
              private modalService: NgbModal) { }

  ngOnInit() {
  }

}
