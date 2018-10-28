import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['../../../assets/styles/movies.scss']
})
export class MoviesComponent implements OnInit {
  private urlHost: String = 'http://sv.myclass.vn/Images/Movies/';
  private MovieList: Array<Movie>;
  private subService: Subscription;
  private trailer;
  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.subService = this.movieService.GetMovies().subscribe(
      res => {
        this.MovieList = res;
      }
    );
  }

}
