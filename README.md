# NgScrollCalendar

NgScrollCalendar is a Angular Module that supports fullscreen and Lazyload on Pagescroll (Recommanded for Mobile screens)

## Supported API

### Properties

| @Input()                 | Type                 | Required | Default | Description                       |
| -------------------------| -------------------- | -------- | --------| --------------------------------- |
| config                   | Object               | Yes      | {show:false} | Used for Calendar visibility |  

| @Output()  | Type         | Event Type          | Required | Description                                                                     |
| ---------- | ------------ | ------------------- | -------- | ------------------------------------------------------------------------------- |
| onSelect   | EventEmitter | onSelect            | Yes      | Returns the Selected date.                                                      |

