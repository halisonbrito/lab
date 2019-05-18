import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {WeatherService} from './weather.service';
import { FormsModule } from '@angular/forms';
import { ForecastListComponent } from './forecast-list/forecast-list.component';
import {ForecastService} from './forecast.service';
import {AddressService} from './address.service';
import { ForecastSearchComponent } from './forecast-search/forecast-search.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule, 
    HttpModule,
    FormsModule
  ],
  providers: [WeatherService,
              ForecastService,
              AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
