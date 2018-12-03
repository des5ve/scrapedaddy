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
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SignInComponent} from './sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';
import { RecentGamesWidgetComponent } from './recent-games-widget/recent-games-widget.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    SportSelectorComponent,
    NflScoresComponent,
    NbaScoresComponent,
    MlbScoresComponent,
    BettingModalComponent,
    SignUpComponent,
    SignInComponent,
    RecentGamesWidgetComponent,
    StatisticsComponent
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
