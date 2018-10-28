import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../home/stores';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromStore.HomeState>, private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (localStorage.getItem('userLogin')) {
        const user: User = JSON.parse(localStorage.getItem('userLogin'));
        this.store.dispatch(new fromStore.Login(user));
        return true;
      } else {
        this.router.navigate(['']);
      }
    this.store.select(fromStore.login).subscribe((res) => {
      if (!res) {
         this.router.navigate(['']);
      }
    });
    return this.store.select(fromStore.login);
  }
}
