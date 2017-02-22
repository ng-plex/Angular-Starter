import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeView } from './home-view.component';

@NgModule({
  imports: [
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeView, pathMatch: 'full'},
      { path: 'lazy', loadChildren: './lazy.module#LazyModule'}
    ])
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/'}
  ],
  declarations: [AppComponent, HomeView],
  exports: [AppComponent]
})
export class AppModule { }
