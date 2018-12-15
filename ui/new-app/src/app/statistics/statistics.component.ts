import { Component } from '@angular/core';
import { NflTeamStat } from '../models/NflTeamStat';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {

  teamName: string = "Team";
  nflTeamStat: NflTeamStat[] = [];
  leagueList: Array<any> = [
    {name: 'NFL', teams: ['Giants', 'Falcons', 'Cowboys']},
    {name: 'NBA', teams: ['Knicks', 'Hornets', 'Warriors']},
    {name: 'MLB', teams: ['Yankees', 'Braves', 'Red Sox']}
  ];
  teams: Array<any>;
  changeTeam(count){
    this.teams = this.leagueList.find(con => con.name == count).teams;
  }
  
  
  // Radar
  public radarChartLabels:string[] = ['YPP', 'YPPA', 'YPRA', 'YPPA', 'YPRPA', 'YPRAA', 'YPA'];

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

    this.teamName = value;
    console.log(value);
    //Request API
    this.radarChartData = [{data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'}, {data: [25, 19, 30, 31, 96, 95, 70], label: 'Series B'}];

  }
}
