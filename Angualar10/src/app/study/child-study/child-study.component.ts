import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-study',
  templateUrl: './child-study.component.html',
  styleUrls: ['./child-study.component.css']
})
export class ChildStudyComponent implements OnInit {
@Input() master: string;

@Output() childMessage = new EventEmitter<any>();

  constructor() { }
  ngOnInit(): void {
  }

  disp(){
    this.childMessage.emit('I am the child in service');
  }
}
