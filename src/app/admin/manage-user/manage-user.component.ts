import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Subscription, Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import * as fromStore from '../stores';
import { UserActionButtonComponent } from './user-action-button/user-action-button.component';
@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {
   userList$: Observable<User[]>;
   subService: Subscription;
   selectedUser$: Observable<User>;
    settings = {
    columns: {

      TaiKhoan: {
        title: 'Tài Khoản'
      },
      HoTen: {
        title: 'Họ Tên'
      },
      MaLoaiNguoiDung: {
        title: 'Loại Người Dùng',
        valuePrepareFunction: (type) => type === 'QuanTri' ? 'Quản Trị' : 'Khách Hàng'
      },
      SoDT: {
        title: 'Số Điện Thoại'
      },
      ThaoTac: {
        title: 'Thao Tác',
        type: 'custom',
        renderComponent: UserActionButtonComponent,
        filter: false,
        sort: false,
        width: '120px'
      }
    },
    pager : {
      perPage : 5
    },
    actions: false
  };
  constructor(
    private userService: UserService,
    private store: Store<fromStore.AdminState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.GetUsers());
    this.userList$ = this.store.select(fromStore.getUsersSuccess);
  }
  deleteUser(taikhoan: string) {
    this.store.dispatch(new fromStore.DeleteUser(taikhoan));
  }
  addUser() {
    this.store.dispatch(new fromStore.SelectUser(null));
  }
}
