import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

import { Store } from '@ngrx/store';
import * as fromStore from '../stores';
import swal from 'sweetalert2';
@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.scss']
})
export class ModalUserComponent implements OnInit {
  @Input() user: User;
  @ViewChild('close') closeModal: ElementRef;
  constructor(private userService: UserService, private store: Store<fromStore.AdminState>) { }

  ngOnInit() {
        this.store.select(fromStore.getUsersState).subscribe(
          state => {
            this.user = !state.user ?  new User() :  state.user  ;
            this.user.MaLoaiNguoiDung = !state.user ?  'KhachHang' :  state.user.MaLoaiNguoiDung  ;
          }
        );
  }
  register(user: User) {
    if (user.TaiKhoan) {
      user.MaNhom = 'GP06';
      this.store.dispatch(new fromStore.AddUser(user));
      swal({
        title: 'Thêm người dùng thành công',
        type: 'success'
      }).then(
        res => this.closeModal.nativeElement.click()
      );
    }
  }
  update(user: User) {
    user.MaNhom = 'GP06';
    user.TaiKhoan = this.user.TaiKhoan;
    this.store.dispatch(new fromStore.EditUser(user));
    swal({
      title: 'Cập nhật thành công',
      type: 'success'
    });
  }
}
