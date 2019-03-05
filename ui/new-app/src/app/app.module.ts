import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {ScoresService} from "./services/scores.service";
import { SportSelectorComponent } from './sport-selector/sport-selector.component';
import { NflScoresComponent } from './nfl-scores/nfl-scores.component';
import { NbaScoresComponent } from './nba-scores/nba-scores.component';
import { MlbScoresComponent } from './mlb-scores/mlb-scores.component';
import { BettingModalComponent } from './betting-modal/betting-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';
import { RecentGamesWidgetComponent } from './recent-games-widget/recent-games-widget.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ChartsModule } from 'ng2-charts';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ScoreboardPickerComponent } from './scoreboard-picker/scoreboard-picker.component';
import { TwitterWidgetComponent } from './twitter-widget/twitter-widget.component';
import { AuthButtonComponent } from './auth-button/auth-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SportSelectorComponent,
    NflScoresComponent,
    NbaScoresComponent,
    MlbScoresComponent,
    BettingModalComponent, 
    RecentGamesWidgetComponent,
    StatisticsComponent,
    NavBarComponent,
    ScoreboardPickerComponent,
    TwitterWidgetComponent,
    AuthButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
        {path: 'nfl-scores', component: NflScoresComponent},
        {path: 'nba-scores', component: NbaScoresComponent},
        {path: 'mlb-scores', component: MlbScoresComponent},
        {path: '', redirectTo: 'nfl-scores', pathMatch: 'full'}
    ]),
    NgbModule.forRoot()
  ],
  providers: [ScoresService, AuthenticationService],
  entryComponents: [BettingModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
