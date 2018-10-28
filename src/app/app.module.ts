import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  LOCALE_ID } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';
import localeViExtra from '@angular/common/locales/extra/vi';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { AuthGuard } from './auth/auth.guard';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './stores';
const appRoute: Routes = [
  {path: '', loadChildren: () => HomeModule},
  {path: 'admin', canActivate: [AuthGuard], loadChildren: () => AdminModule},
  {
    path: '**' ,
    redirectTo: '/',
    pathMatch: 'full',
  }
];

registerLocaleData(localeVi, 'vi-VI', localeViExtra);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    HttpModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    BrowserAnimationsModule,

  ],
  providers: [{ provide: LOCALE_ID, useValue: 'vi-VI' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
