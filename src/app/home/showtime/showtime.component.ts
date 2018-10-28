import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { MoviesService } from '../../services/movies.service';
import { Seat } from '../../models/seat';
import { Store } from '@ngrx/store';
import * as fromStore from '../stores';
import { Movie } from '../../models/movie';
import { DomSanitizer } from '@angular/platform-browser';
import { User } from '../../models/user';
@Component({
  selector: 'app-showtime',
  templateUrl: './showtime.component.html',
  styleUrls: ['../../../assets/styles/showtime.scss']
})
export class ShowtimeComponent implements OnInit, OnDestroy {
  private subParams: Subscription;
  private id: string;
  private movieId: string;
  private seats: Seat[];
  private bookingSeats: Seat[] = [];
  private errBooking: Boolean = false;
  // private movie$: Observable<Movie>;
  private checkoutDone = false;

  private trailerSrc;
   movie: Movie;
  private increase = 0;
  private showtime;
  private total = 0;
  private user: User;
  private ticketQr;
  constructor(
    private activeRoute: ActivatedRoute,
    private movieService: MoviesService,
    private store: Store<fromStore.HomeState>,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.subParams = this.activeRoute.queryParams.subscribe(params => {
      this.id = params.id;
      // this.groupID = thamso.groupID
      this.movieId = params.movie;
    });
    this.movieService.GetSchedule(parseFloat(this.id)).subscribe(res => {
      this.seats = res.DanhSachGhe;
    });
    this.store.dispatch(new fromStore.GetMovieDetail(this.movieId));
    this.store.select(fromStore.getMovieDetail).subscribe(res => {
      this.movie = res;
      if (this.movie) {
        this.trailerSrc = this.movie.Trailer.replace('watch?v=', 'embed/');
        this.trailerSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.trailerSrc
        );
        this.showtime = this.movie.LichChieu.find(
          item => item.MaLichChieu === +this.id
        );
        // this.loaded = true;
      }
    });
    this.store.select(fromStore.getUser).subscribe(
      (res) => this.user = res
  );
    // this.movie$ = this.store.select(fromStore.getMovieDetail);

  }
  increaseString(i) {
    return String.fromCodePoint(65 + i);
  }
  selectSeat(bookingSeat: Seat, isBooking) {
    this.bookingSeats = isBooking
      ? [...this.bookingSeats, bookingSeat]
      : this.bookingSeats.filter(seat => seat.MaGhe !== bookingSeat.MaGhe);
    const length = this.bookingSeats.length;
    // if (length > 1) {
    //   this.bookingSeats.sort((a, b) => {
    //     return a.STT - b.STT;
    //   });
    //   for (let i = 0; i < this.bookingSeats.length - 1; i++) {
    //     if (this.bookingSeats[i + 1].STT - this.bookingSeats[i].STT === 2) {
    //       alert('Không duoc bo trong ghế giữa');
    //       break;
    //     }
    //   }
    // }
    this.total = this.bookingSeats.reduce((p, c) => p + c.GiaVe, 0);
  }
  checkoutSuccess(res) {
    this.checkoutDone = res.checkoutDone;
    this.ticketQr = res.ticket;
  }
  ngOnDestroy() {
    this.subParams.unsubscribe();
  }
}
