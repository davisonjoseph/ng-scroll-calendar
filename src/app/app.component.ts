import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config = {
    show: false,
    weekOffset: -2,
    selectedDate: new Date(),
    DisablePastDays:true
  };

  onDateChange(date) {
    console.log(date);
  }

  showCalendar() {
    this.config.show = true;
  }
}
