import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { Movie } from '../../models/movie';
import { Store } from '@ngrx/store';
import * as fromStore from '../stores';
@Component({
  selector: 'app-topoffice',
  templateUrl: './topoffice.component.html',
  styleUrls: ['./topoffice.component.scss']
})
export class TopofficeComponent implements OnInit {
  private movie: Observable<Movie[]>;
   onPlayingMovie: Array<Movie> = [];
  constructor(private store: Store<fromStore.AdminState>) { }

  ngOnInit() {
    this.store.dispatch( new fromStore.GetMovies());
   this.store.select(fromStore.getMoviesSuccess).subscribe(
      res => {
        const today = new Date();
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
      }
    );
  }

}
