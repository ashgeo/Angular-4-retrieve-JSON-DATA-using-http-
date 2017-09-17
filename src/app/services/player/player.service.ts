import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/Operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PlayerService {
  private _url = "assets/data/players.json";

  constructor(private _http: Http) { }
 getPlayers()
 {
   return this._http.get(this._url)
   .map((response: Response) => response.json())
   .catch(this.handleError);
 }
 private handleError(error: Response) {
  
  return Observable.throw(error.json().error || 'Server error');
}
}
