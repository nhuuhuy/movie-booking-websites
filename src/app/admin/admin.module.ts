import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Routes, RouterModule } from '../../../node_modules/@angular/router';
import { MyDatePickerModule } from 'mydatepicker';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageMovieComponent } from './manage-movie/manage-movie.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { ModalUserComponent } from './modal-user/modal-user.component';
import { AuthGuard } from '../auth/auth.guard';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { StoreModule } from '../../../node_modules/@ngrx/store';
import { EffectsModule } from '../../../node_modules/@ngrx/effects';
import { reducers, effects } from './stores';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ActionButtonComponent } from './movie-list/action-button/action-button.component';
import { UserActionButtonComponent } from './manage-user/user-action-button/user-action-button.component';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PiechartComponent } from './piechart/piechart.component';
import { TopofficeComponent } from './topoffice/topoffice.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { HomeModule } from '../home/home.module';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: AdminDashboardComponent
      },
      {
        path: 'movie',
        component: ManageMovieComponent,
        children: [
          {
            path: '',
            component: MovieListComponent
          },
          {
            path: ':id',
            component: EditMovieComponent
          }
        ]
      },
      {
        path: 'add-movie',
        component: AddMovieComponent
      },
      {
        path: 'user',
        component: ManageUserComponent
      },
      {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    MyDatePickerModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    StoreModule.forFeature('adminpage', reducers),
    EffectsModule.forFeature(effects),
    Ng2SmartTableModule,
    NgxChartsModule,
    BarRatingModule,
  ],
  entryComponents: [ActionButtonComponent, UserActionButtonComponent],
  declarations: [
    SidebarComponent,
    AdminDashboardComponent,
    AdminLayoutComponent,
    ManageUserComponent,
    ManageMovieComponent,
    AdminHeaderComponent,
    AddMovieComponent,
    MovieListComponent,
    EditMovieComponent,
    ModalUserComponent,
    ActionButtonComponent,
    UserActionButtonComponent,
    LineGraphComponent,
    PiechartComponent,
    TopofficeComponent
  ],
  exports: [DatePipe]
})
export class AdminModule {}
