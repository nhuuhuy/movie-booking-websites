import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';
import { Observable } from '../../../node_modules/rxjs';
import { Http, Headers, Response } from '../../../node_modules/@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ShowtimeService {
  private apiBookMovie = 'http://sv2.myclass.vn/api/QuanLyDatVe/DatVe';
  constructor(private _http: Http) { }
  BookTicket(ticket): Observable<any> {
    const header = new Headers;
    header.append('Content-Type', 'application/json');
    const obServe: Observable<any> = this._http.post(this.apiBookMovie, ticket, {headers: header}).map(
      (res: Response) => res.json()
    );
    return obServe;
  }
}
