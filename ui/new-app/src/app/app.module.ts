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
import { NhlScoresComponent } from './nhl-scores/nhl-scores.component';
import { BetdocketComponent } from './betdocket/betdocket.component';
import { GolfScoresComponent } from './golf-scores/golf-scores.component';
import { WagersComponent } from './wagers/wagers.component';
import { CfbScoresComponent } from './cfb-scores/cfb-scores.component';


@NgModule({
  declarations: [
    AppComponent,
    SportSelectorComponent,
    NflScoresComponent,
    NbaScoresComponent,
    MlbScoresComponent,
    NhlScoresComponent,
    BettingModalComponent,
    SignUpComponent,
    SignInComponent,
    RecentGamesWidgetComponent,
    BetdocketComponent,
    GolfScoresComponent,
    WagersComponent,
    CfbScoresComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
        {path: 'nfl-scores', component: NflScoresComponent},
        {path: 'nba-scores', component: NbaScoresComponent},
        {path: 'mlb-scores', component: MlbScoresComponent},
        {path: 'nhl-scores', component: NhlScoresComponent},
        {path: 'golf-scores', component: GolfScoresComponent},
        {path: 'cfb-scores', component: CfbScoresComponent},
        {path: 'wagers', component: WagersComponent},
        {path: '', redirectTo: 'nfl-scores', pathMatch: 'full'}
    ]),
    NgbModule.forRoot()
  ],
  providers: [ScoresService, AuthenticationService],
  entryComponents: [BettingModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
