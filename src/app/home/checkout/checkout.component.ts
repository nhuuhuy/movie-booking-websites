import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from '@angular/core';
import { Seat } from '../../models/seat';
import { ShowtimeService } from '../../services/showtime.service';
import { Ticket } from '../../models/ticket';
import { Movie } from '../../models/movie';
import { User } from '../../models/user';
import { Store } from '@ngrx/store';
import * as fromStore from '../stores';
import swal from 'sweetalert2';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnChanges {
  @Input()
  bookingSeats: Seat[];
  @Input()
  showTimeId;
   movie: Movie;
  @Input()
  user: User;
  @Output()
  checkoutSuccess = new EventEmitter();
   total = 0;
   showtime;
   checkoutDone = false;
  constructor(
    private showtimeService: ShowtimeService,
    private store: Store<fromStore.HomeState>
  ) {}

  ngOnInit() {
    this.store.select(fromStore.getMovieDetail).subscribe(res => {
      this.movie = res;
      this.showTimeId = parseFloat(this.showTimeId);
      this.showtime = this.movie.LichChieu.find(
        item => item.MaLichChieu === this.showTimeId
      );
    });
    this.store.select(fromStore.getUser).subscribe(res => (this.user = res));
  }
  ngOnChanges() {
    this.total = this.bookingSeats.reduce((p, c) => p + c.GiaVe, 0);
  }
  checkout() {
    if (this.bookingSeats.length) {
      const user = JSON.parse(localStorage.getItem('userLogin'));
      const danhSachGhe = this.bookingSeats.map(seat => {
        return {
          MaGhe: seat.MaGhe,
          GiaVe: seat.GiaVe
        };
      });
      const ticket = {
        MaLichChieu: this.showTimeId,
        TaiKhoanNguoiDung: this.user.TaiKhoan,
        DanhSachVe: danhSachGhe
      };
      this.showtimeService.BookTicket(ticket).subscribe(res => {
        this.checkoutDone = true;
        this.checkoutSuccess.emit({
          ticket: JSON.stringify(ticket),
          checkoutDone: this.checkoutDone
        });
        swal({
          title: 'Đặt vé thành công',
          type: 'success'
        });
      });
    }
  }
}
