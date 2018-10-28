import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';


import { Store } from '@ngrx/store';
import * as fromStore from '../stores';
import swal from 'sweetalert2';
import { Router } from '../../../../node_modules/@angular/router';
@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
   movie: Movie = new Movie;
  constructor(
    private movieService: MoviesService,
    private store: Store<fromStore.AdminState>,
    private router: Router
  ) { }

  ngOnInit() {
  }
  AddMovie(movie, files?) {
    if (movie.TenPhim) {
      const  formData: FormData = new FormData();
      if ( files.length > 0 ) {
        const file = files[0];
        formData.append('Files', file);
        formData.append('TenPhim', movie.TenPhim);
        movie.HinhAnh =  file.name;
        this.movieService.UploadFile(formData).subscribe(
          result => {}
          );
      }
      movie.MaPhim = 1;
      movie.NgayKhoiChieu = movie.NgayKhoiChieu.formatted;
      movie.MaNhom = 'GP06';
      this.store.dispatch(new fromStore.AddMovie(movie));
      swal({
        title: 'Đăng phim thành công',
        type: 'success'
      }).then(
        res => this.router.navigate(['/admin/movie'])
      );
    } else {
      swal({
        title: 'Vui lòng điền thông tin',
        type: 'warning'
      });
    }

  }

}
