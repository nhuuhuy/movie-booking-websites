import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { Store } from '@ngrx/store';
import * as fromStore from '../stores';
import { Observable } from '../../../../node_modules/rxjs';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private searchArr: Observable<Movie[]>;
  constructor(private store: Store<fromStore.HomeState>) {}

  ngOnInit() {}
  convertString(str) {
    str = str.trim();
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
      ' '
    );
    str = str.replace(/ + /g, ' ');
    return str;
  }
  onSearch(event: any) {
    this.store.select(fromStore.fetchMoviesSuccess).subscribe(res => {
      if (res.length) {
        this.store.dispatch(new fromStore.SearchMovies(event.target.value));
        this.searchArr = this.store.select(fromStore.searchMovie);
      } else {
        this.store.dispatch(new fromStore.FetchMovies());
      }
    });
  }
}
