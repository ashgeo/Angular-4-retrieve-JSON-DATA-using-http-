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
   addplayer(player: any): Observable<any> {
	let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this._url, player, options)
                   .map(this.extractData)
                   .catch(this.handleError);
    }

private extractData(res: Response) {
	let body = res.json();
        return body.data || {};
    }
   private handleError(error: Response) {
  
  return Observable.throw(error.json().error || 'Server error');
}
}
}
