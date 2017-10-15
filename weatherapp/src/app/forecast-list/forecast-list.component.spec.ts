import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ForecastListComponent } from './forecast-list.component';
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


describe('ForecastListComponent', () => {
  let component: ForecastListComponent;
  let fixture: ComponentFixture<ForecastListComponent>; 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ForecastListComponent 
      ],
      providers: [WeatherService,AddressService,ForecastService],
      imports:[BrowserModule, HttpModule,FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
