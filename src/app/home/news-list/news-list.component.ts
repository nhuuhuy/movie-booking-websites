import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['../../../assets/styles/news-list.scss']
})
export class NewsListComponent implements OnInit, OnDestroy {
   newsList;
  private page = {
    page: 1,
    perpage: 9
  };
  private subService: Subscription;
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.subService = this.newsService.getNewsList(this.page.page, this.page.perpage).subscribe(
      res => this.newsList = res
    );
  }
  prevPage() {
    this.page.page -= 1;
    this.newsList = null;
    this.subService = this.newsService.getNewsList(this.page.page, this.page.perpage).subscribe(
      res => this.newsList = res
    );
  }
  nextPage() {
    this.page.page += 1;
    this.newsList = null;
    this.subService = this.newsService.getNewsList(this.page.page, this.page.perpage).subscribe(
      res => this.newsList = res
    );
  }
  ngOnDestroy() {
  }
}
