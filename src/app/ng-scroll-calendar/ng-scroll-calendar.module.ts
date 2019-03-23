import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgScrollCalendarComponent } from './ng-scroll-calendar.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    NgScrollCalendarComponent
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule
  ],
  exports:[NgScrollCalendarComponent],
  providers: []
})
export class NgScrollCalendarModule { }
