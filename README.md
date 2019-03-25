# NgScrollCalendar

NgScrollCalendar is a Angular Module that supports fullscreen and Lazyload on Pagescroll (Recommended for Mobile screens)


## Installation

```
npm install ng-scroll-calendar --save
```


## Usage

import the NgScrollCalendarModule to your module:

```typescript
.
import { NgScrollCalendarModule } from 'ng-scroll-calendar';
.
.

@NgModule({
  imports: [
    NgScrollCalendarModule,
    .
    .
    ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

```

Add the following changes to your Component

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <input type="text" (focus)="showCalendar()">
    <ng-scroll-calendar [config]="config" (onSelect)="onDateChange($event)"></ng-scroll-calendar>
  `
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
```

## Supported API

### Properties
```
@Input()  config

```
| Key                      | Type                 | Required | Default | Description                       |
| -------------------------| -------------------- | -------- | --------| --------------------------------- |
| show                     | Boolean              | Yes      |  false  | Used for Calendar visibility      |  
| selectedDate             | Date                 | Optional |  Current Date  | d-active class will be added to the selected date |  
| weekOffset               | Number               | Optional |  -2     | Number of Weeks to be Skipped(eg. 2)/Added(eg: -2) |  
| DisablePastDays          | Boolean              | Optional |  false     | Disable/Enable past Days          |

### Events

| @Output()  | Type         | Description                                                     |
| ---------- | ------------ | --------------------------------------------------------------- |
| onSelect   | EventEmitter | Returns the Selected date.                                      |

### Style Guide

| Class Name | Description   |
|------------|---------------|
| .date-item | will be added to all the date tiles | 
| .disabled  | will be added to the dates which are disabled |
| .d-active  | will be added to the selected date   |
| .today     | will be added when date = today      | 