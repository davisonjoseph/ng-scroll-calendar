import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgScrollCalendarModule } from './ng-scroll-calendar/ng-scroll-calendar.module'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgScrollCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
