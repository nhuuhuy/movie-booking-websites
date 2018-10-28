import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import { Subscription, Observable } from '../../../../node_modules/rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../stores';
@Component({
  selector: 'app-quick-booking',
  templateUrl: './quick-booking.component.html',
  styleUrls: ['./quick-booking.component.scss']
})
export class QuickBookingComponent implements OnInit, OnDestroy {
  @Input() movies: Movie[];
  private movie: Movie;
  private showtime;
  private isUserLogin: boolean;
  private subService: Subscription;
  private selectDone = false;
  constructor(private movieService: MoviesService, private store: Store<fromStore.HomeState>) { }

  ngOnInit() {
    this.store.select(fromStore.login).subscribe(
      (res) => {
        this.isUserLogin = res;
      }
    );
  }
  getMovie(e) {
  this.subService = this.movieService.GetMoviesDetail(e).subscribe(res =>  this.movie = res );
  }
  getShowtime(e) {
    this.showtime = this.movie.LichChieu.find(showtime => showtime.MaLichChieu = e);
  }
  selectShowTime() {
    this.selectDone = true;
  }
  ngOnDestroy() {
  }
}
