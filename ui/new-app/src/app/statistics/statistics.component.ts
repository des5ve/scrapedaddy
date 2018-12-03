import { Component, OnInit } from '@angular/core';
import { NflTeamStat } from '../models/NflTeamStat'

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  teamName: string = "Butt";
  nflTeamStat: NflTeamStat[] = [];
  
  
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
    const newNflTeamStat = new NflTeamStat();
    newNflTeamStat.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
    newNflTeamStat.radarChartData = {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'};
    newNflTeamStat.radarChartType = 'radar';
    
    this.nflTeamStat.push(newNflTeamStat);
    console.log(newNflTeamStat);
  };

  ngOnInit() {

    
  }

}
