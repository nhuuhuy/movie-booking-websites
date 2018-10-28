import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { Store } from '@ngrx/store';
import * as fromStore from './stores/reducers/user.reducers';
import * as appActions from './stores/actions/user.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit() {
    if (localStorage.getItem('userLogin')) {
      const user: User = JSON.parse(localStorage.getItem('userLogin'));
      this.store.dispatch(new appActions.Login(user));

    }
  }
  constructor(private store: Store<fromStore.UserState>) {}
}
