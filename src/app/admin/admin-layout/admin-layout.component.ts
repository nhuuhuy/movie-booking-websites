import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../stores';
import { User } from '../../models/user';
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['../../../assets/styles/admin.scss']
})
export class AdminLayoutComponent implements OnInit {
   toogled = false;
  constructor(private store: Store<fromStore.AdminState>) { }

  ngOnInit() {
    if (localStorage.getItem('userLogin')) {
      const user: User = JSON.parse(localStorage.getItem('userLogin'));
      this.store.dispatch(new fromStore.Login(user));
    }
  }
  onToogleSidebar(event) {
    this.toogled = !this.toogled;
  }
  openSidebar() {
    this.toogled = false;
  }
}
