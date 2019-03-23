# NgScrollCalendar

NgScrollCalendar is a Angular Module that supports fullscreen and Lazyload on Pagescroll (Recommanded for Mobile screens)


## Installation

```
npm install ng-scroll-calendar --save
```


## Usage

import the NgScrollCalendarModule to your module:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgScrollCalendarModule } from 'ng-scroll-calendar';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app';

@NgModule({
  imports: [BrowserModule, NgScrollCalendarModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
```

Add the following changes to your Component

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <input type="text" (focus)="onFocus()">
    <ng-scroll-calendar [config]="config" (onSelect)="onDateChange($event)"></ng-scroll-calendar>
  `
})

export class AppComponent {
  config = { show: false };

  onDateChange(date) {
    console.log(date);
  }

  onFocus(){
    this.config.show = true;
  }
}
```

## Supported API

### Properties

| @Input()                 | Type                 | Required | Default | Description                       |
| -------------------------| -------------------- | -------- | --------| --------------------------------- |
| config                   | Object               | Yes      | {show:false} | Used for Calendar visibility |  

| @Output()  | Type         | Event Type          | Required | Description                                                                     |
| ---------- | ------------ | ------------------- | -------- | ------------------------------------------------------------------------------- |
| onSelect   | EventEmitter | onSelect            | Yes      | Returns the Selected date.                                                      |

