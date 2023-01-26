import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TangramDataService {
  private BASE_URL: string = 'https://tangram-calendar.jeffpowell.dev/';
  private fnHintURL: (d: Date) => string = (d: Date) => this.BASE_URL + "hint/" + dateToString(d);
  private fnSolutionURL: (d: Date) => string = (d: Date) => this.BASE_URL + "solution/" + dateToString(d);

  constructor(private http: HttpClient) { }

  getHint(targetDate: Date) : Observable<string[]> {
    return this.http.get(this.fnHintURL(targetDate), {responseType: 'text'}).pipe(map(rawToArray));
  }

  getSolution(targetDate: Date) : Observable<string[]>{
    return this.http.get(this.fnSolutionURL(targetDate), {responseType: 'text'}).pipe(map(rawToArray));
  }
}

function dateToString(d: Date) : string{
  return d.toISOString().substring(0, 10);
}

function rawToArray(response: string): string[] {
  return response.trim().split("\n");
}
