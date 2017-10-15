import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ForecastListComponent} from './forecast-list/forecast-list.component';
import {ForecastSearchComponent} from './forecast-search/forecast-search.component';

const routes: Routes = [
  {path: '', component: ForecastSearchComponent},
  {path: 'history',component: ForecastListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
