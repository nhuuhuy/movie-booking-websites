import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import swal from 'sweetalert2';
import * as fromStore from '../stores';
import { User } from '../../models/user';
@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.scss']
})
export class AuthComponentComponent implements OnInit {
  @ViewChild('close') closeModal: ElementRef;
  private isUserLogin: Boolean = false;
  private isSignUp: Boolean = false;
  constructor(private store: Store<fromStore.HomeState>) {}
  ngOnInit() {}
  signIn(user) {
    this.store.dispatch(new fromStore.Login(user));
    this.store.select(fromStore.login).subscribe(state => {
      if (state) {
        this.isUserLogin = true;
        swal({
          title: 'Đăng nhập thành công',
          type: 'success'
        });
        this.closeModal.nativeElement.click();
      }
    });
  }
  toogleForm() {
    this.isSignUp = !this.isSignUp;
  }
  signUp(user: User) {
    user.MaNhom = 'GP06';
    user.MaLoaiNguoiDung = 'KhachHang';
    this.store.dispatch(new fromStore.Register(user));
    this.store.select(fromStore.getUserLoginState).subscribe(state => {
    });
    this.store.select(fromStore.register).subscribe(
      res => {
        if (res) {
          swal({
            title: 'Đăng ký thành công',
            type: 'success'
          });
          this.isSignUp = false;
        }
      }
    );
    this.store.select(fromStore.getUserLoginState).subscribe(state => {
      if (state.user) {
      }
    });
  }
}
