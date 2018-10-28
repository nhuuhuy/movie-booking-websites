import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OwlModule } from 'ngx-owl-carousel';
import { BarRatingModule } from 'ngx-bar-rating';
import { FormsModule } from '@angular/forms';

import { LayoutComponent } from './layout/layout.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { BannerComponent } from './banner/banner.component';
import { MoviesSliderComponent } from './movies-slider/movies-slider.component';
import { ShowtimeComponent } from './showtime/showtime.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModalTrailerComponent } from './modal-trailer/modal-trailer.component';
import { NewsComponent } from './news/news.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { FooterComponent } from './footer/footer.component';
import { SeatComponent } from './seat/seat.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SlugPipe } from '../pipes/slug.pipe';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './stores';
import { QRCodeModule } from 'angularx-qrcode';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { LoadingComponent } from './loading/loading.component';
import { AuthGuard } from './auth.guard';
import { QuickBookingComponent } from './quick-booking/quick-booking.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NgMasonryGridModule } from 'ng-masonry-grid';
const homeRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomepageComponent
      },
      {
        path: 'phim',
        children: [
          {
            path: '',
            component: MoviesComponent
          },
          {
            path: ':id',
            component: MoviedetailComponent
          }
        ]
      },
      {
        path: 'checkout',
        canActivate: [AuthGuard],
        component: ShowtimeComponent
      },
      {
        path: 'tin-tuc',
        children: [
          {
            path: '',
            component: NewsListComponent
          },
          {
            path: ':id',
            component: NewsDetailComponent
          }
        ]
      },
      {
        path: 'profile',
        canActivate: [AuthGuard],
        component: ProfileComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    OwlModule,
    FormsModule,
    StoreModule.forFeature('homepage', reducers),
    EffectsModule.forFeature(effects),
    BarRatingModule,
    QRCodeModule,
    Ng2SmartTableModule,
    NgMasonryGridModule
  ],
  declarations: [
    LayoutComponent,
    HomepageComponent,
    MoviesComponent,
    MoviedetailComponent,
    BannerComponent,
    MoviesSliderComponent,
    ShowtimeComponent,
    NavbarComponent,
    ModalTrailerComponent,
    NewsComponent,
    MovieCardComponent,
    AuthComponentComponent,
    FooterComponent,
    SeatComponent,
    CheckoutComponent,
    SlugPipe,
    SearchComponent,
    ProfileComponent,
    LoadingComponent,
    QuickBookingComponent,
    NewsListComponent,
    NewsDetailComponent
  ],
  exports: [SlugPipe]
})
export class HomeModule {}
