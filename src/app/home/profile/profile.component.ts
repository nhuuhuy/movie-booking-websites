import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../stores';
import { Observable } from '../../../../node_modules/rxjs';
import { User } from '../../models/user';
import { DatePipe } from '@angular/common';
import swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../../../assets/styles/profile.scss'],
  providers: [DatePipe]
})
export class ProfileComponent implements OnInit {
  private user: User;
  private bookingHistory;
  private  settings = {
    columns: {
      MaGhe: {
        title: 'Mã Ghế'
      },
      TenPhim: {
        title: 'Tên Phim'
      },
      NgayDat: {
        title: 'Ngày Đặt',
        valuePrepareFunction: (date) => {
          const raw = new Date(date);
          const formatted = this.datePipe.transform(raw, 'dd - MM - yyyy');
          return formatted;
        }
      },
      Rap: {
        title: 'Rạp'
      },
      GiaVe: {
        title: 'Giá Vé',
      }
    },
    pager : {
      perPage : 5
    },
    actions: false,
  };
  constructor(private store: Store<fromStore.HomeState>,  private datePipe: DatePipe) { }

  ngOnInit() {
  this.store.select(fromStore.getUser).subscribe(
    res => {
      this.user = res;
    }
  );
  }
  getBookingHistory(taikhoan) {
    this.store.dispatch(new fromStore.GetHistory(taikhoan));
    this.store.select(fromStore.bookingHistory).subscribe(
      res => {
        this.bookingHistory = res.DanhSachVeDaDat;
      }
    );
  }
  update(user: User) {
    user.MaNhom = 'GP06';
    user.TaiKhoan = this.user.TaiKhoan;
    user.MaLoaiNguoiDung = this.user.MaLoaiNguoiDung;
    this.store.dispatch(new fromStore.UpdateProfile(user));
    swal({
      title: 'Cập Nhật Tài khoản Thành Công',
      type: 'success'
    });
  }
}
