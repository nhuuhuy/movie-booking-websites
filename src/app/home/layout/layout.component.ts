import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../stores';
import { User } from '../../models/user';
import { Observable } from '../../../../node_modules/rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['../../../assets/styles/home-layout.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {
  private loadingMovies: Observable<boolean>;
  private loadingNews: Observable<boolean>;
  private loadingMovie: Observable<boolean>;
  constructor(private store: Store<fromStore.HomeState>) {}

  ngOnInit() {
    if (localStorage.getItem('userLogin')) {
      const user: User = JSON.parse(localStorage.getItem('userLogin'));
      this.store.dispatch(new fromStore.Login(user));
    }
  }
  ngAfterViewInit() {
  }
}
