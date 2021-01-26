import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-test',
  templateUrl: './event-test.component.html',
  styleUrls: ['./event-test.component.css']
})
export class EventTestComponent implements OnInit {

  total: number = 1;
  
  countClicks!: number;

  message: string = '';
  constructor() { }

  ngOnInit() {
    this.countClicks = 0;
  }

  addClick(){
    this.countClicks++;
  }

  removeClick(){
    this.countClicks--;
  }
  
  private addition(a: number, b : number){
    this.total = a + b  
  }
  private setMsg(){
    this.message = "a";
  }

}
