import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  public images: Array<any> = [
    {
      src:
        'https://s3img.vcdn.vn/123phim/2018/08/alpha-nguoi-thu-linh-15344943312798.png'
    },
    {
      src:
        'https://s3img.vcdn.vn/123phim/2018/08/song-lang-15344942577932.jpg'
    },
    {
      src:
        'https://s3img.vcdn.vn/123phim/2018/08/dich-nhan-kiet-tu-dai-thien-vuong-15344942043678.jpg'
    }
  ];
  private option = {
    items: 1,
    dots: true,
    nav: true,
    loop: true,
    autoHeight: true,
    stagePadding: true,
    margin: 0,
    singleItem: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: ['<i class="material-icons">chevron_left</i>', '<i class="material-icons">chevron_right</i>']
  };
  constructor() {}

  ngOnInit() {}
}
