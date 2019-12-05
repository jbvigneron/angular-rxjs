import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SubscribeAsyncComponent } from './subscribe-async/subscribe-async.component';
import { SubscribeToErrorsComponent } from './subscribe-to-errors/subscribe-to-errors.component';
import { FromVsOfComponent } from './from-vs-of/from-vs-of.component';
import { RangeFilterComponent } from './range-filter/range-filter.component';
import { RangeMapComponent } from './range-map/range-map.component';
import { RangeMapFilterComponent } from './range-map-filter/range-map-filter.component';
import { SwapiComponent } from './swapi/swapi.component';
import { HttpClientModule } from '@angular/common/http';
import { DurationComponent } from './duration/duration.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscribeComponent,
    SubscribeAsyncComponent,
    SubscribeToErrorsComponent,
    FromVsOfComponent,
    RangeFilterComponent,
    RangeMapComponent,
    RangeMapFilterComponent,
    SwapiComponent,
    DurationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
