import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit {
  //@Input()parentMessage: string;
  master = 'I am the parent in Services';  
  constructor() { }
  ngOnInit(): void {
  }

  displayChildMessage(event){
    console.log(event);    
  }
}
