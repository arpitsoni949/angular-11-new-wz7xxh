import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-child',
  templateUrl: './p-child.component.html',
  styleUrls: ['./p-child.component.css'],
})
export class PChildComponent implements OnInit {
  @Input() childMessage: string;

  message = 'from child to parent';
  constructor() {}

  ngOnInit() {}
}
