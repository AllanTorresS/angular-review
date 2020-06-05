import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dataBind',
  templateUrl: './dataBind.component.html',
  styleUrls: ['./dataBind.component.css']
})
export class DataBindComponent implements OnInit {

  url:String = 'https://www.google.com'
  urlImagem:String = 'http://lorempixel.com/400/200/'
  constructor() { }

  ngOnInit() {
  }

}
