import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Injectable} from '@angular/core';
import {Result} from './result';

@Injectable()
export class WeatherService{

    constructor(private http:Http){}

    public post(response:Result):Promise<Result>{
         return this.http.post("http://localhost:3000/log",response)
                    .toPromise()
                    .then( ( response:any ) => response );
    }


    public find(text:String):Promise<Result[]>{


        return this.http.get(`http://localhost:3000/find/${text}`)
                   .toPromise()
                   .then( ( response:any ) => {
                       let resultList:Result[] = []; 

                       let resultjson = JSON.parse(response._body);

                       resultjson.forEach( (result) => {
                          resultList.push(result.weatherResult);
                       }); 

                       console.log(resultList.length);

                       return resultList; 
                });

    }    

    public getList(text:String):Promise<Result[]>{

        
        return this.http.get(`http://localhost:3000/list`)
                   .toPromise()
                   .then( ( response:any ) => {
                       let resultList:Result[] = []; 

                       let resultjson = JSON.parse(response._body);

                       resultjson.forEach( (result) => {
                          resultList.push(result.weatherResult);
                       }); 

                       console.log(resultList.length);

                       return resultList; 
                });

    }

}