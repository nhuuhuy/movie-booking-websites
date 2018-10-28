import { Injectable } from '@angular/core';
import { Http, Response } from '../../../node_modules/@angular/http';
import { Observable } from '../../../node_modules/rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiGetNews = 'http://35mm.vn/wp-json/wp/v2/posts?_embed';
  private apiGetNewsDetail = 'http://35mm.vn/wp-json/wp/v2/posts/';
  constructor(private _http: Http) { }
  getNews(page): Observable<any> {
    const apiGetNewsPage = this.apiGetNews + `&per_page=${page}`;
    const obServe = this._http.get(apiGetNewsPage).map( (res: Response) => res.json());
    return obServe;
  }
  getNewsList(page, perpage): Observable<any> {
    const apiGetNewsPage = this.apiGetNews + `&per_page=${perpage}` + `&page=${page}`;
    const obServe = this._http.get(apiGetNewsPage).map( (res: Response) => res.json());
    return obServe;
  }
  getNewDetail(id): Observable<any> {
   const apiGetNews = this.apiGetNewsDetail + id + '?_embed';
    const obServe = this._http.get( apiGetNews).map( (res: Response) => res.json());
    return obServe;
  }
}
