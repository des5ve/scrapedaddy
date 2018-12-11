import { Component } from '@angular/core';
import { NflTeamStat } from '../models/NflTeamStat';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {

  teamName: string = "Butt";
  nflTeamStat: NflTeamStat[] = [];
  
  
  // Radar
  public radarChartLabels:string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData:any = [
    {data: [Math.floor((Math.random() * 100) + 1), 
            Math.floor((Math.random() * 100) + 1), 
            Math.floor((Math.random() * 100) + 1), 
            Math.floor((Math.random() * 100) + 1),
            Math.floor((Math.random() * 100) + 1), 
            Math.floor((Math.random() * 100) + 1),
            Math.floor((Math.random() * 100) + 1)], label: 'Series A'},
    {data: [Math.floor((Math.random() * 100) + 1), 
            Math.floor((Math.random() * 100) + 1), 
            Math.floor((Math.random() * 100) + 1), 
            Math.floor((Math.random() * 100) + 1),
            Math.floor((Math.random() * 100) + 1), 
            Math.floor((Math.random() * 100) + 1),
            Math.floor((Math.random() * 100) + 1)], label: 'Series B'}
  ];

  public radarChartType:string = 'radar';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  
  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor() { }

  switchTeam(value: string) {
    const barChartOptions = {
      title: {
        text: value,
        display: true
      }
    };

    this.teamName = value;
    const newNflTeamStat = new NflTeamStat();
    newNflTeamStat.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
    newNflTeamStat.radarChartData = {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'};
    newNflTeamStat.radarChartType = 'radar';
    this.nflTeamStat.push(newNflTeamStat);
    console.log(newNflTeamStat);
    console.log(this.nflTeamStat);
  }
}
