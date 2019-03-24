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
    selectedDate: new Date(2019, 2, 30)
  };

  onDateChange(date) {
    console.log(date);
  }

  onFocus() {
    this.config.show = true;
  }
}
