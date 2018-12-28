import { Component } from '@angular/core';
import { NflTeamStat } from '../models/NflTeamStat';
import { ScoresService } from '../services/scores.service';

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

  stats: any;

  constructor(private scoresService: ScoresService) { }
  
  
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

  switchTeam(value: string) {

    this.teamName = value;
    console.log(value);
    //Request API
    this.radarChartData = [
      {data: 
        [
          Math.floor((Math.random() * 100) + 1), 
          Math.floor((Math.random() * 100) + 1), 
          Math.floor((Math.random() * 100) + 1), 
          Math.floor((Math.random() * 100) + 1),
          Math.floor((Math.random() * 100) + 1), 
          Math.floor((Math.random() * 100) + 1),
          Math.floor((Math.random() * 100) + 1)], label: 'Series A'}, 
      {data: 
        [
          Math.floor((Math.random() * 100) + 1), 
          Math.floor((Math.random() * 100) + 1), 
          Math.floor((Math.random() * 100) + 1), 
          Math.floor((Math.random() * 100) + 1),
          Math.floor((Math.random() * 100) + 1), 
          Math.floor((Math.random() * 100) + 1),
          Math.floor((Math.random() * 100) + 1)], label: 'Series B'}
    ];
  }

  private getStats(): void{
    this.scoresService.getGraphStats().subscribe(stats => {
      this.setStats(stats)}, (error => {
      console.error(error);
    }));
  }

  private setStats(stats: any): void{
    console.log(stats);
    this.stats = stats;
  }

  changeTeam(count){
    console.log(count);
    this.teams = this.leagueList.find(con => con.name == count).teams;
  }
}
