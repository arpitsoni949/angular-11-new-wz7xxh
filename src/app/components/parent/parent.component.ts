import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PChildComponent } from './p-child/p-child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  parentMessage = 'Hi its a shared data from Parent';

  constructor() {}

  // @ViewChild(PChildComponent) child: PChildComponent;
  message: string;
  // ngAfterViewInit() {
  //   this.message = this.child.message;
  //   alert('AfterViewInit' + this.child.message);
  // }

  receiveMessage($event) {
    this.message = $event;
    alert(this.message);
  }
  ngOnInit() {}
}
