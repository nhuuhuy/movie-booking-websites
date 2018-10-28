import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../stores';
import { User } from '../../models/user';
import { Observable } from '../../../../node_modules/rxjs';
@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
  @Output() toogle = new EventEmitter();
   toogled = false;
   user: Observable<User>;
  constructor(private store: Store<fromStore.AdminState>) { }

  ngOnInit() {
    if (localStorage.getItem('userLogin')) {
      const user: User = JSON.parse(localStorage.getItem('userLogin'));
      this.store.dispatch(new fromStore.Login(user));
    }
    this.user = this.store.select(fromStore.login);
  }
  onToogleSidebar() {
    this.toogled = !this.toogled;
    this.toogle.emit(this.toogle);
  }
  logOut() {
    localStorage.removeItem('userLogin');
    this.store.dispatch(new fromStore.Logout());

  }
}
