import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';

import { Store } from '@ngrx/store';
import * as fromStore from '../stores';
@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['../../../assets/styles/movie-detail.scss']
})
export class MoviedetailComponent implements OnInit, OnDestroy {
  private id: string;
  private isUserLogin: Observable<boolean>;
  private subParams: Subscription;
  movie: Movie = new Movie();
  private circle: any = {
    strokeDasharray: 2 * Math.PI * 54,
    strokeDashoffset: 0
  };
  private currentShowtimes;
  constructor(
    private activeRoute: ActivatedRoute,
    private store: Store<fromStore.HomeState>
  ) {}

  ngOnInit() {
    this.subParams = this.activeRoute.queryParams.subscribe(params => {
      this.id = params.id;
      this.store.dispatch(new fromStore.GetMovieDetail(this.id));
      this.store.select(fromStore.getMovieDetail).subscribe(res => {
        this.movie = res;
        if (res) {
          this.circle.strokeDashoffset =
          this.circle.strokeDasharray * (1 - this.movie.DanhGia / 5);
          this.currentShowtimes = res.LichChieu[0];
        }
      });
    });
    this.isUserLogin = this.store.select(fromStore.login);
  }

  changeBookingDate(showtimes) {
    this.currentShowtimes = showtimes;
  }
  ngOnDestroy() {
    this.subParams.unsubscribe();
  }
}
