import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private groupID = 'GP06';
  private apiCreateUser = 'http://sv2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung';
  private apiLogin = 'http://sv2.myclass.vn/api/QuanLyNguoiDung/DangNhap';
  private apiGetUsers = `http://sv2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${ this.groupID }`;
  private apiUpdateUser = `http://sv2.myclass.vn/api/QuanLyNguoiDung/CapNhatThongTin`;
  private apiGetUserType = `http://sv2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung?MaNhom=${ this.groupID }`;
  constructor(private _http: Http) { }
  getAllUser(): Observable<User[]> {
  const obServe: Observable<any> = this._http.get(this.apiGetUsers).map((res: Response) => res.json());
  return obServe;
  }
  createUser(user: User): Observable<any> {
    const header = new Headers();
    header.append('Content-Type', 'application/json');
    const obServe = this._http.post(this.apiCreateUser, user, { headers: header }).map((res: Response) => res.json());
    return obServe;
  }
  updateUser(user: User): Observable<any> {
    const header = new Headers();
    header.append('Content-Type', 'application/json');
    const obServe = this._http.post(this.apiUpdateUser, user, {headers: header}).map(
      (res: Response) => res.json()
    );
    return obServe;
  }
  deleteUser(taikhoan: string): Observable<any> {
    const apiDeleteUser = `http://sv2.myclass.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taikhoan}`;
    const obServe = this._http.delete(apiDeleteUser).map((result: Response) => result.json());
    return obServe;
  }
  login(user): Observable<any> {
    const header = new Headers();
    header.append('Content-Type', 'application/json');
    const loginUrl = `${this.apiLogin}?TaiKhoan=${user.TaiKhoan}&matkhau=${user.MatKhau}`;
    const obServe = this._http.post(loginUrl, user, {headers: header}).map(
      (res: Response) => res.json()
    );
    return obServe;
  }
  getBookingHistory(taikhoan: string) {
    const api = 'http://sv2.myclass.vn/api/QuanLyDatVe/XemLichSuDatVe?TaiKhoan=' + taikhoan;
    const header = new Headers();
    header.append('Content-Type', 'application/json');
    const obServe = this._http.post(api, {headers: header}).map(
      (res: Response) => res.json()
    );
    return obServe;
  }
}
