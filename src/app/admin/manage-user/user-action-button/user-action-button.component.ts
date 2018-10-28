import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { ViewCell } from '../../../../../node_modules/ng2-smart-table';
import { User } from '../../../models/user';
import { Store } from '@ngrx/store';
import * as fromStore from '../../stores';
@Component({
  selector: 'app-user-action-button',
  templateUrl: './user-action-button.component.html',
  styleUrls: ['./user-action-button.component.scss']
})
export class UserActionButtonComponent implements ViewCell, OnInit {
   user: User;
  @Input() value;
  @Input() rowData: User;
  constructor(private store: Store<fromStore.AdminState>) { }

  ngOnInit() {
    this.user = this.rowData;
  }
  deleteUser(taikhoan: string) {
    this.store.dispatch(new fromStore.DeleteUser(taikhoan));
  }
  editUser(user?: User ) {
    this.user = user ?  user :  new User() ;
  }
  selectUser() {
    this.store.dispatch(new fromStore.SelectUser(this.rowData));
  }
}
