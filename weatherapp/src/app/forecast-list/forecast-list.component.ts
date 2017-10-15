import { Component, OnInit } from '@angular/core';
import {WeatherService} from './../weather.service';
import {Result} from './../result';

@Component({
  selector: 'app-forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrls: ['./forecast-list.component.css']
})  
export class ForecastListComponent implements OnInit {

  textSearch:String = "";
  results:Result[]; 

  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
     this.weatherService.getList(this.textSearch)
       .then( (response) => {
         this.results = response;
     });

  }

  search():void{

    console.log("  " + this.textSearch);
    this.weatherService.find(this.textSearch)
    .then( (response) => {
      this.results = response;
    });
  }

}
