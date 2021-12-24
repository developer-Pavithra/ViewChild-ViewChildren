import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  age: number = 78;
  counter: number = 0;
  constructor() {}

  ngOnInit() {}
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
}
