import { AfterViewInit, Component } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-root',
  template: '<dashboard></dashboard>',
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    Feather.replace();
  }
}
