import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Store } from '@ngrx/store';
import * as fromStore from '../stores';
import { Observable } from '../../../../node_modules/rxjs';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  private newsList;
  constructor(private store: Store<fromStore.HomeState>) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.FetchNews(6));
    this.store.select(fromStore.fetchNews).subscribe(
      res => this.newsList = res[0]
    );
  }

}
