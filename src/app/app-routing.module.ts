import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SubscribeAsyncComponent } from './subscribe-async/subscribe-async.component';
import { SubscribeToErrorsComponent } from './subscribe-to-errors/subscribe-to-errors.component';
import { FromVsOfComponent } from './from-vs-of/from-vs-of.component';
import { RangeFilterComponent } from './range-filter/range-filter.component';
import { RangeMapComponent } from './range-map/range-map.component';
import { RangeMapFilterComponent } from './range-map-filter/range-map-filter.component';
import { SwapiComponent } from './swapi/swapi.component';
import { DurationComponent } from './duration/duration.component';

const routes: Routes = [
  {
    path: 'subscribe',
    component: SubscribeComponent
  },
  {
    path: 'subscribe-async',
    component: SubscribeAsyncComponent
  },
  {
    path: 'subscribe-to-errors',
    component: SubscribeToErrorsComponent
  },
  {
    path: 'from-vs-of',
    component: FromVsOfComponent
  },
  {
    path: 'range-filter',
    component: RangeFilterComponent
  },
  {
    path: 'range-map',
    component: RangeMapComponent
  },
  {
    path: 'range-map-filter',
    component: RangeMapFilterComponent
  },
  {
    path: 'swapi',
    component: SwapiComponent
  },
  {
    path: 'duration',
    component: DurationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
