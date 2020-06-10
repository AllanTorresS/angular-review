import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './input-properties.component.html',
  styleUrls: ['./input-properties.component.css']
})
export class InputPropertiesComponent implements OnInit {

  @Input() title:String;
  constructor() { }

  ngOnInit() {
  }

}
