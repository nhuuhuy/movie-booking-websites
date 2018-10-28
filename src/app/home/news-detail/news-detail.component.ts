import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from '../../../../node_modules/rxjs';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { NewsService } from '../../services/news.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['../../../assets/styles/news-list.scss']
})
export class NewsDetailComponent implements OnInit, OnDestroy {
   news;
  private subParams: Subscription;
  private subService: Subscription;
  private id;
  private content;
  constructor(
    private activeRoute: ActivatedRoute,
    private newsService: NewsService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.subParams = this.activeRoute.queryParams.subscribe(params => {
      this.id = params.id;
    });
    setTimeout(
      () => {
        this.subService = this.newsService.getNewDetail(this.id).subscribe(
          res => {
            this.news = res;
            this.content = this.sanitizer.bypassSecurityTrustHtml(this.news.content.rendered);
          }
        );
      }, 600
    );
  }
  ngOnDestroy() {
    this.subParams.unsubscribe();
    this.subService.unsubscribe();
  }
}
