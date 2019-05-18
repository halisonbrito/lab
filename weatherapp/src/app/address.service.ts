import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Address} from './address';

@Injectable()
export class AddressService{

    constructor(private http:Http){}

    public request(searchAddress:String):Promise<Address>{

        return this.http.request(`http://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(ma.toString())}`)
            .toPromise()
            .then( (response:any) => {
                let result = JSON.parse(response._body).results[0];
                let latitude = result.geometry.location.lat;
                let longitude = result.geometry.location.lng;
                let realAddress = result.formatted_address;
                return new Address(longitude,latitude,searchAddress,realAddress);
            });
    }


}