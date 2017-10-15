import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Http} from '@angular/http';
import {Result} from './result';
import {Address} from './address';

@Injectable()
export class ForecastService{

    constructor(private http:Http){}

    public request( address:Address):Promise<Result>{

        return this.http.get(`https://api.darksky.net/forecast/bbb94d0f1d6b20767e68b0809d839590/${encodeURI(address.latitude.toString())},${encodeURI(address.longitude.toString())}`)
            .toPromise()
            .then( (response:any) => {
                  let result = new Result();
                  result.temperature = JSON.parse(response._body).currently.temperature;
                  result.summary = JSON.parse(response._body).currently.summary;
                  result.result = true;
                  result.searchAddress = address.searchAddress;
                  result.realAddress = address.realAddress;
                  return result;
            });
    }

}