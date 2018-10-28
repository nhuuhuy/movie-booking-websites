import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Store } from '@ngrx/store';
import * as fromStore from '../stores/reducers/user.reducers';
import * as actions from '../stores/actions/user.actions';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private isUserAdmin = false;
  constructor(
    private store: Store<fromStore.UserState>,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('userLogin')) {
      const user: User = JSON.parse(localStorage.getItem('userLogin'));
      this.store.dispatch(new actions.Login(user));
      if (user.MaLoaiNguoiDung === 'QuanTri') {
        return true;
      } else {
        return this.router.navigate(['/']);
      }

    }
  }
}
