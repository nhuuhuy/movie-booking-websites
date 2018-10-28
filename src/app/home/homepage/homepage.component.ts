import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Subscription } from 'rxjs';
import { Movie } from '../../models/movie';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import * as fromStore from '../stores';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['../../../assets/styles/home.scss']
})
export class HomepageComponent implements OnInit {
  private MovieList: Observable<Array<Movie>>;
  private subService: Subscription;
  constructor(
    private movieService: MoviesService,
    private store: Store<fromStore.HomeState>
  ) {}
   onPlayingMovie: Array<Movie> = [];
   comingSoonMovie: Array<Movie> = [];
  ngOnInit() {
    const today = new Date('08/30/2018');
    this.store.dispatch(new fromStore.FetchMovies());
    this.MovieList = this.store.select(fromStore.fetchMoviesSuccess);
    this.MovieList.subscribe(res => {
      res.sort(function(a, b) {
        const keyA = new Date(a.NgayKhoiChieu),
          keyB = new Date(b.NgayKhoiChieu);
        if (keyA < keyB) {
          return -1;
        }
        if (keyA > keyB) {
          return 1;
        }
        return 0;
      });
      this.onPlayingMovie = res.filter(
        movie => new Date(movie.NgayKhoiChieu) < today
      );

      this.comingSoonMovie = res.filter(
        movie => new Date(movie.NgayKhoiChieu) > today
      );
    });
  }
}
