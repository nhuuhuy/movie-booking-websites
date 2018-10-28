import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Seat } from '../../models/seat';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {
  @Input() seat: Seat;
 @Output() eventBook = new EventEmitter();
  private isBooking: Boolean = false;
  constructor() { }

  ngOnInit() {
  }
  selectSeat() {
    this.isBooking = !this.isBooking;
    this.eventBook.emit(this.isBooking);
  }
}
