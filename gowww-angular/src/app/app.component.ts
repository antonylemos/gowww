import { AfterViewInit, Component } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-root',
  template: '<signin></signin>',
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    Feather.replace();
  }
}
