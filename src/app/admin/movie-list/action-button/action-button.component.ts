import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../../models/movie';
import { Store } from '@ngrx/store';
import * as fromStore from '../../stores';
import { ViewCell } from '../../../../../node_modules/ng2-smart-table';
@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements ViewCell, OnInit {
  private movie: Movie;
  @Input() value;
  @Input() rowData: Movie;
  constructor( private store: Store<fromStore.AdminState>) { }

  ngOnInit() {
    this.movie = this.rowData;
  }
  deleteMovie(id) {

    this.store.dispatch(new fromStore.DeleteMovie(id));
  }
}
