import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../stores';

@Component({
  selector: 'app-movies-slider',
  templateUrl: './movies-slider.component.html',
  styleUrls: ['./movies-slider.component.scss']
})
export class MoviesSliderComponent implements OnInit {
  @Input() MovieArray;
  @Output() eventTrailer = new EventEmitter();
  private trailer: string;
   loadingMovies: Observable<boolean>;
  private owlArray = [];
  private owlOptions = {
    items: 5,
    margin: 30,
    dots: false,
    navigation: true,
    loop: false,
    autoHeight: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      '0': { items: 2, nav: true, loop: true },
      '480': { items: 2, nav: true, loop: true },
      '768': { items: 4, nav: true, loop: false },
      '1200': {items: 5, nav: true, loop: false}
    },
    navText: ['<i class="material-icons">chevron_left</i>', '<i class="material-icons">chevron_right</i>']
  };
  constructor( private store: Store<fromStore.HomeState>) {}

  ngOnInit() {
    this.MovieArray = [] ;
   this.loadingMovies = this.store.select(fromStore.fetchMovies);
  }
}
