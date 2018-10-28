import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { Subscription, Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { Store } from '@ngrx/store';
import * as fromStore from '../stores';
import { ActionButtonComponent } from './action-button/action-button.component';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  providers: [DatePipe]
})
export class MovieListComponent implements OnInit {
  private MovieList$: Observable<Movie[]>;
  private  settings = {
    columns: {
      HinhAnh: {
        title: 'STT',
        valuePrepareFunction: (data) => {
          let index = 0;
          this.MovieList$.subscribe(
            res => {
              index = res.findIndex( movie => movie.HinhAnh === data ) + 1;
            }
          );
          return index;
        },
        filter: false,
        sort: false
      },
      MaPhim: {
        title: 'Mã Phim'
      },
      TenPhim: {
        title: 'Tên Phim'
      },
      NgayKhoiChieu: {
        title: 'Ngày Khởi chiếu',
        valuePrepareFunction: (date) => {
          const raw = new Date(date);
          const formatted = this.datePipe.transform(raw, 'dd - MM - yyyy');
          return formatted;
        }
      },
      DanhGia: {
        title: 'Đánh Giá'
      },
      ThaoTac: {
        title: 'Thao Tác',
        type: 'custom',
        renderComponent: ActionButtonComponent,
        filter: false,
        sort: false,
        width: '120px'
      }
    },
    pager : {
      perPage : 5
    },
    actions: false,
  };
  constructor(
    private store: Store<fromStore.AdminState>,
    private datePipe: DatePipe
  ) {}
  ngOnInit() {
    this.store.dispatch( new fromStore.GetMovies());
    this.MovieList$ = this.store.select(fromStore.getMoviesSuccess);
  }
  deleteMovie(id) {

    this.store.dispatch(new fromStore.DeleteMovie(id));
  }
}
