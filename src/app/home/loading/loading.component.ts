import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../stores';
import { Observable } from '../../../../node_modules/rxjs';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  loading = false;
   loadingMovies: Observable<boolean>;
   loadingNews: Observable<boolean>;
   loadingMovie: Observable<boolean>;
  constructor(private store: Store<fromStore.HomeState>) { }

  ngOnInit() {
      this.loadingMovies = this.store.select(fromStore.fetchMovies);
      this.loadingMovie = this.store.select(fromStore.getMovie);
      this.loadingNews = this.store.select(fromStore.newsLoad);
  }

}
