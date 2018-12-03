import { Component, OnInit } from '@angular/core';
import { nflTeamStat } from '../models/nflTeamStat'

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  teamName: string = "Butt";
  nflTeamStat: nflTeamStat[] = [];
  
  
   // events
   public chartClicked(e:any):void {
     console.log(e);
   }
  
   public chartHovered(e:any):void {
     console.log(e);
   }

  constructor() { }

  switchTeam(value: string){
    this.teamName = value;
    const nflTeamStat = new nflTeamStat();
    nflTeamStat.radarChartLabels= ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
    

  };

  ngOnInit() {

    
  }

}
