import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {WeatherService} from '../weather.service';
import {ForecastService} from '../forecast.service';
import {AddressService} from '../address.service';
import {Address} from '../address';
import {Result} from '../result';

@Component({
  selector: 'app-forecast-search',
  templateUrl: './forecast-search.component.html',
  styleUrls: ['./forecast-search.component.css']
})
export class ForecastSearchComponent implements OnInit {

  busca:String = "";
  result:Result = new Result();
  searchFound:Boolean = false;
  
  searchError:Boolean = false;
  messageError:String = "";

  constructor(private weatherService:WeatherService, 
              private addressService:AddressService, 
              private forecastService:ForecastService){
  }
              
    ngOnInit() {}              

    public search():void{

      console.log(this.busca);

      this.addressService.request(this.busca).then( (address:Address) => {
         
         this.forecastService.request(address).then( (result:Result) => {

            if(result.result){
              this.result = result;
              this.searchFound = true;
              this.weatherService.post( result );
            }else{
              this.searchFound = false;
            }

         }).catch( (exception) => { 
          this.searchError = true; 
          this.messageError = 'Error on searching forecast weather';
          console.log(exception);
        });

      }).catch( (exception) => {  
        this.searchError = true; 
        this.messageError = 'Error on searching address information';
        console.log('erro -- ' + exception);
      });


    }

}
