import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-p-child',
  templateUrl: './p-child.component.html',
  styleUrls: ['./p-child.component.css'],
})
export class PChildComponent implements OnInit {
  @Input() childMessage: string;

  message = 'shared data from child to parent';
  constructor() {}

  ngOnInit() {}

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.message);
  }
}
