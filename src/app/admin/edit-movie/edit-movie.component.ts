import { Component, OnInit, OnDestroy } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import * as fromStore from '../stores';
@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit, OnDestroy {
  private id: string;
  private movie: Movie;
  private subService: Subscription;
  private subParams: Subscription;
  private startDate: any;
  constructor(
    private movieService: MoviesService,
    private activeRoute: ActivatedRoute,
    private store: Store<fromStore.AdminState>
  ) {}
  ngOnInit() {
    this.subParams = this.activeRoute.queryParams.subscribe(params => {
      this.id = params.id;
    });
    this.subService = this.movieService
      .GetMoviesDetail(this.id)
      .subscribe(res => {
        this.movie = res;
        const releasDate = new Date(this.movie.NgayKhoiChieu);
        this.startDate = {
          date: {
            year: releasDate.getFullYear(),
            month: releasDate.getMonth() + 1,
            day: releasDate.getDate()
          }
        };
      });
  }
  UpdateMovie(movie, files) {
    if (movie.TenPhim) {
      const formData: FormData = new FormData();
      if (files.length) {
        const file = files[0];
        formData.append('Files', file);
        formData.append('TenPhim', movie.TenPhim);
        this.movieService.UploadFile(formData).subscribe(result => {
          movie.HinhAnh = result ? file.name : this.movie.HinhAnh;
          swal({
            title: 'Cập nhật thành công',
            type: 'success'
          });
        });
      } else {
        movie.HinhAnh = this.movie.HinhAnh;
        swal({
          title: 'Cập nhật thành công',
          type: 'success'
        });
      }
      movie.MoTa = this.movie.MoTa;
      movie.MaPhim = this.movie.MaPhim;
      movie.NgayKhoiChieu = movie.NgayKhoiChieu.formatted
        ? movie.NgayKhoiChieu.formatted
        : this.movie.NgayKhoiChieu;
      movie.MaNhom = 'GP06';
      this.store.dispatch(new fromStore.EditMovie(movie));

    } else {
      swal({
        title: 'Vui lòng điền thông tin',
        type: 'warning'
      });
    }
  }
  ngOnDestroy() {
    this.subParams.unsubscribe();
  }
}
