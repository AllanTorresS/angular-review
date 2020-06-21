import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  constructor() { }

  @ViewChild('nome')
  name:HTMLInputElement;

  ngOnInit() {
    console.log(this.name)
  }

  ngAfterViewInit(): void {
    console.log(this.name)
    
  }
  
  acessarDOM(){
    console.log(this.name)
  }
}
