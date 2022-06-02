import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BmiMetricComponent } from './bmi-metric/bmi-metric.component';
import { BmiImperialComponent } from './bmi-imperial/bmi-imperial.component';
import { EnglishBmiComponent } from './english-bmi/english-bmi.component';

@NgModule({
  declarations: [
    AppComponent,
    BmiMetricComponent,
    BmiImperialComponent,
    EnglishBmiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
