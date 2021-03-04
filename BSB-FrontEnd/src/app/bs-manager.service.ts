import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, pipe } from 'rxjs';
import { record } from './record';
import {tap, catchError} from 'rxjs/operators';
import { food } from './food';
import { FoodTrackerComponent } from './food-tracker/food-tracker.component';
import { meal } from './meal';
import { daily } from './daily';

@Injectable({
  providedIn: 'root'
})
export class BsManagerService {

  baseUrl : string = "http://localhost:8080/api";
  //url to begin calling food nutrition data, (+ food name)
  nutUrl : string = "https://api.nal.usda.gov/fdc/v1/foods/search?api_key=SohihGmRVzAtcLPY0c3Yo2SQsWE8V2992IbSe4VT&query="
  httpOptions = {headers: new HttpHeaders({"Content-Type" : "application/json"})}

  constructor(private http : HttpClient) { }


  getAllRecords() : Observable<record[]> {
    return this.http.get<record[]>(this.baseUrl + "/allrecords")
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        let empty : record[] = [];
        return of(empty);
      })
      );

  }

  addRecord(toAdd : record) : Observable<record> {
    console.log(toAdd);
    return this.http.post<record>(this.baseUrl + "/bloodsugar", toAdd, this.httpOptions)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    );


  } 
  
  addMeal(toAdd : meal) : Observable<meal>{
    console.log(toAdd);
    return this.http.post<record>(this.baseUrl + "/addmeal", toAdd, this.httpOptions)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    );
  }
  

  getByDate() : Observable<record[]> {
    return this.http.get<record[]>(this.baseUrl + "/day")
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        let empty : record[] = [];
        return of(empty);
      })
    );
  }

 
  findFood(name : string) : Observable<food>{
    return this.http.get<food>(this.nutUrl + name)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
      );
  }

  getDailyValues() : Observable<daily> {
    return this.http.get<daily>(this.baseUrl + "/dailyvalues")
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        let empty : daily;
        return of(empty);
      })
      );

  }
}