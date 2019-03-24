import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgScrollCalendarModule } from './module/module';
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
