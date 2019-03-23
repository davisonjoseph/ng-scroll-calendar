import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'ng-scroll-calendar',
  templateUrl: './ng-scroll-calendar.component.html',
  styleUrls: ['./ng-scroll-calendar.component.css']
})
export class NgScrollCalendarComponent implements OnInit {

  showCalendar: boolean = false;
  MONTHS = ["January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"];

  MONTH_CLASS = ["month", "other-month"]
  ONE_DAY = 86400000;
  ONE_WEEK = 86400000 * 7;
  DateSet = [];
  @Output() onSelect = new EventEmitter();
  @Input('config') config;
  WEEK_OFFSET = -2;
  NUM_WEEKS_TO_RENDER;
  constructor() { }

  ngOnInit() {
    this.NUM_WEEKS_TO_RENDER = window.innerHeight / 40;
    this.renderMoreWeeks(this.NUM_WEEKS_TO_RENDER);
  }

  onDateSelect(dObj) {
    this.onSelect.emit(dObj.value);
    this.config.show = false;
  }

  renderFutureWeek(numWeeksAhead) {
    var now = new Date();
    var someWeeksFromNow = new Date(now.getTime() + (this.ONE_WEEK * numWeeksAhead));
    return this.renderWeekAround(someWeeksFromNow);
  }

  renderWeekAround(someDate) {
    var currentMonth = someDate.getMonth();
    var currentDayOfWeek = someDate.getDay();
    var currentDate = someDate.getDate();
    var week = [];
    for (var i = 0; i < 7; i++) {
      var difference = i - currentDayOfWeek;
      var anotherDay = this.calculateDay(someDate, difference);
      week[i] = anotherDay;
    }
    return this.generateWeekAsHtmlRow(week);
  }

  calculateDay(someDate, offsetInDays) {
    var offsetInMillis = offsetInDays * this.ONE_DAY;
    return new Date(someDate.getTime() + offsetInMillis);
  }

  generateWeekAsHtmlRow(weekArray) {
    var temp = [];
    for (var i = 0; i < 7; i++) {
      var date = weekArray[i];
      if ((this.dateFormatter(date)).month) {
        temp.push({ month: this.dateFormatter(date).month, year: weekArray[i].getFullYear() });
      }

      if (weekArray[i].getDate() == 1) {
        for (let idx = 0; idx < i; idx++) {
          temp.push({ date: '' });
        }
      }
      var css_class = this.determineStyle(date)
      temp.push({ class: css_class, date: this.dateFormatter(date).date, value: date });
    }
    return temp;
  }

  determineStyle(aDate) {
    var someMonth = aDate.getMonth();
    var someDayOfWeek = aDate.getDay();
    var someDate = aDate.getDate();
    var now = new Date();
    if (someMonth == now.getMonth() && someDayOfWeek == now.getDay() && someDate == now.getDate()) {
      return "today";
    }
    return this.MONTH_CLASS[aDate.getMonth() % 2];
  }

  dateFormatter(date) {
    var formattedDate: any = {};
    if (date.getDate() == 1) {
      formattedDate.month = this.MONTHS[date.getMonth()];
    }
    formattedDate.date = date.getDate();
    if (date.getDate() == 1 && date.getMonth() == 0) {
      formattedDate.year = date.getFullYear();
    }
    return formattedDate;
  }

  fullDate(date) {
    var formatted = this.MONTHS[date.getMonth()] + ", " + date.getFullYear();
    return formatted;
  }

  renderMoreWeeks(numWeeks) {
    for (var i = 0; i < numWeeks; i++) {
      this.DateSet.push(this.renderFutureWeek(this.WEEK_OFFSET));
      this.WEEK_OFFSET++;
    }
  }

  onScroll() {
    this.renderMoreWeeks(this.NUM_WEEKS_TO_RENDER);
  }
}
