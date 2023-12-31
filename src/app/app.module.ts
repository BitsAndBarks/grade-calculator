import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorBachelorComponent } from './calculator-bachelor/calculator-bachelor.component';
import { GrundstudiumComponent } from './grundstudium/grundstudium.component';
import { HauptstudiumComponent } from './hauptstudium/hauptstudium.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from "@angular/material/tabs";

@NgModule({
  declarations: [
    AppComponent,
    CalculatorBachelorComponent,
    GrundstudiumComponent,
    HauptstudiumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
