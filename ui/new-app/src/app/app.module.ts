import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {ScoresService} from "./services/scores.service";
import { SportSelectorComponent } from './sport-selector/sport-selector.component';


@NgModule({
  declarations: [
    AppComponent,
    SportSelectorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [ScoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
