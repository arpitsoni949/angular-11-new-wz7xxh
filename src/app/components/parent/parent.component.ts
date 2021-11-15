import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PChildComponent } from './p-child/p-child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements AfterViewInit {
  parentMessage = 'Hi its a shared data from Parent';

  constructor() {}

  @ViewChild(PChildComponent) child;
  message: string;
  ngAfterViewInit(): void {
    this.message = this.child.message;
  }

  ngOnInit() {}
}
