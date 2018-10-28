import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Movie } from '../models/movie';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiUrlGetMovie =
    'http://sv2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP06';
  private apiCreateMovie = 'http://sv2.myclass.vn/api/QuanLyPhim/ThemPhimMoi';
  private apiUploadFile = 'http://sv2.myclass.vn/api/QuanLyPhim/UploadFile';
  private apiEditMovie = 'http://sv2.myclass.vn/api/QuanLyPhim/CapNhatPhim';
  private apiRemovePhim = 'http://sv2.myclass.vn/api/QuanLyPhim/XoaPhim?MaPhim';

  constructor(private _http: Http) {}
  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
  public GetMovies(): Observable<Movie[]> {
    const obServe: Observable<any> = this._http
      .get(this.apiUrlGetMovie)
      .map((result: Response) => result.json());
    return obServe;
  }
  public GetMoviesDetail(id: string): Observable<Movie> {
    const apiGetMovieDetail = `http://sv2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${id}`;
    const obServe: Observable<Movie> = this._http
      .get(apiGetMovieDetail)
      .map((result: Response) => result.json());

    return obServe;
  }
  public GetSchedule(id: number): Observable<any> {
    const apiFetchSchedule = `http://sv2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${id}`;
    const obServe: Observable<any> = this._http
      .get(apiFetchSchedule)
      .map((result: Response) => result.json());
    return obServe;
  }
  public AddMovie(movie: Movie): Observable<any> {
    const header: Headers = new Headers();
    header.append('Content-Type', 'application/json');
    const obServe: Observable<any> = this._http
      .post(this.apiCreateMovie, movie, { headers: header })
      .map((result: Response) => result.json());
    return obServe;
  }

  public UploadFile(Files: any) {
    const header: Headers = new Headers();
    const options = new RequestOptions({ headers: header });
    const obServe: Observable<any> = this._http
      .post(this.apiUploadFile, Files, options)
      .map((result: Response) => result.json());
    return obServe;
  }
  public UpdateMovie(movie: Movie) {
    const header: Headers = new Headers();
    header.append('Content-Type', 'application/json');
    const obServe: Observable<any> = this._http
      .post(this.apiEditMovie, movie, { headers: header })
      .map((result: Response) => result.json());
    return obServe;
  }
  public DeleteMovie(id): Observable<any> {
    const apiRemoveMovie =
      'http://sv2.myclass.vn/api/QuanLyPhim/XoaPhim?MaPhim=' + id;
    const obServe = this._http
      .delete(apiRemoveMovie)
      .map((result: Response) => result.json());
    return obServe;
  }
}
