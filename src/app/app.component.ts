import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mycalculator';
  toShow = '0';
  currValue = '';
  writetoinput(value: string) {
    this.currValue = this.currValue + value;
    if (this.currValue == '0') {
      this.currValue = value;
    }
    this.toShow = this.currValue;
  }
  equals() {
    this.toShow = eval(this.currValue);
    this.currValue = this.toShow;
  }
  clear() {
    this.currValue = '';
    this.toShow = '0';
  }
  back() {
    this.currValue = this.currValue.slice(0, -1);
    if (this.currValue == '') {
      this.currValue = '0';
    }
    this.toShow = this.currValue;
  }
}
