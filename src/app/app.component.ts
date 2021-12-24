import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  QueryList,
  VERSION,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  // @ViewChild('myPara') myPara: ElementRef;
  @ViewChildren('myPara') myPara: QueryList<any>;
  @ViewChild('child') child: ChildComponent;

  @ViewChild('myAge') myAge: ElementRef;
  age: number = 0;

  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    // console.log(this.myPara);
  }
  ngDoCheck() {
    // console.log('do check', this.age);
  }
  handleCounter() {}
  ngAfterViewInit() {
    console.log(this.myPara, this.myAge.nativeElement);
    this.myPara.first.nativeElement.style.color = 'blue';
    this.myPara.last.nativeElement.style.color = 'blue';
    this.myPara.forEach((item) => {
      item.nativeElement.style.color = 'red';
    });

    this.myAge.nativeElement.style.color = 'red';
    console.log('view', this.child.counter);
  }
  ngAfterViewChecked() {
    console.log('checked', this.child.counter);
  }
}
