import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { Store } from '@ngrx/store';
import * as fromStore from '../stores';
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: Movie;

  private trailer: string;
  constructor(private store: Store<fromStore.HomeState>) { }

  ngOnInit() {
  }
  openTrailer(trailer: string) {
    this.trailer = trailer.replace('watch?v=', 'embed/') + '?autoplay=1';
    this.store.dispatch({
      type: fromStore.ClassActionTypes.GET_TRAILER,
      payload: this.trailer
    });

  }

}
