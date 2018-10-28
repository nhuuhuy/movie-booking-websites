import { Component, OnInit, Input, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import * as fromStore from '../stores';
@Component({
  selector: 'app-modal-trailer',
  templateUrl: './modal-trailer.component.html',
  styleUrls: ['./modal-trailer.component.scss']
})
export class ModalTrailerComponent implements OnInit {
  @Input() trailer;
  @ViewChild('trailerVideo') trailerVideo: ElementRef;
   trailerSrc;
  constructor(private sanitizer: DomSanitizer, private store: Store<fromStore.HomeState>) { }
  closeTrailer() {
    this.store.dispatch({
      type: fromStore.ClassActionTypes.GET_TRAILER,
      payload: ''
    });
    this.trailerVideo.nativeElement.src = '';
  }
  ngOnInit() {
    this.store.select(fromStore.getHomeState).subscribe(
      state => {
        this.trailerSrc = this.sanitizer.bypassSecurityTrustResourceUrl(state.movies.trailer);
      }
    );
  }

}
