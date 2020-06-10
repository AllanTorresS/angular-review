import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.css']
})
export class EventBindComponent implements OnInit {

  valorAtual:String = '';

  constructor() { }

  clicou(){
    prompt("clicou")
  }

  pressionou(value:string){
    console.log(value)
  }
  ngOnInit() {
  }

}
