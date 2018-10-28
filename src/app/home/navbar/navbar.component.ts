import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromStore from '../stores';
import { Observable } from '../../../../node_modules/rxjs';
import { User } from '../../models/user';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private isUserLogin = false;
  private user: Observable<User>;
  private isAdmin = false;
  constructor(private store: Store<fromStore.HomeState>) { }

  ngOnInit() {
    this.store.select(fromStore.login).subscribe(
      res => this.isUserLogin = res
    );
    this.store.select(fromStore.checkAdmin).subscribe(
      res => this.isAdmin = res
    );
    this.user = this.store.select(fromStore.getUser);
  }
  logOut() {
    localStorage.removeItem('userLogin');
    this.store.dispatch(new fromStore.Logout());

  }

}
