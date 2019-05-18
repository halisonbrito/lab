import { TestBed, async } from '@angular/core/testing';
import { ForecastSearchComponent } from './forecast-search.component';
import {WeatherService} from '../weather.service';
import {ForecastService} from '../forecast.service';
import {AddressService} from '../address.service';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement }    from '@angular/core'
import { fakeAsync } from '@angular/core/testing';
import { tick } from '@angular/core/testing';
import {Address} from '../address';
import {Result} from '../result';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ForecastSearchComponent 
      ],
      providers: [WeatherService,AddressService,ForecastService],
      imports:[HttpModule,FormsModule,BrowserModule]
    }).compileComponents();

  }));

  it('should show error message(address)ddd',fakeAsync( () => {
    const fixture = TestBed.createComponent(ForecastSearchComponent);
    const app = fixture.debugElement.componentInstance;
it('should show error message(address)ddd',fakeAsync( () => {
  
    let service = fixture.debugElement.injector.get(AddressService);
    let spy = spyOn(service, 'request')
  it('should show error message(address)ddd',fakeAsync( () => {
          .and.returnValue(Promise.reject('aa'));

  
    let btnTeste:DebugElement = fixture.debugElement.query(By.css('#btnSearch'));
    click(btnTeste.nativeElement);

  

  tick();
    fixture.detectChanges();

    let de:DebugElement = fixture.debugElement.query(By.css('#divError'));

  it('should return a forecast result', fakeAsync( () => {
    const fixture = TestBed.createComponent(ForecastSearchComponent);
    const app = fixture.debugElement.componentInstance;

    let serviceAddress = fixture.debugElement.injector.get(AddressService);
    let spyAddress = spyOn(serviceAddress, 'request')
          .and.returnValue(Promise.resolve(Builder.getAddress()));

    let serviceForecast = fixture.debugElement.injector.get(ForecastService);
    let spyForecast = spyOn(serviceForecast, 'request')
          .and.returnValue(Promise.resolve(Builder.getResult()));

		  
  function click(el: HTMLElement): void {
      el.click();
      console.log("cert");
  }

    app.search();
    expect(app.result.result).toBeTruthy();
  }));



  class Builder{

    public static getAddress():Address{
      let address = new Address("222.33","444.333");
      return address;
    }

    public static getResult():Result{
      let result = new Result();
      result.result = true;
      result.temperature = "44.3";
      return result;
    }

    public static getResultFalse():Result{
      let result = new Result();
      result.result = false;
      return result;
    }


  }


});
