import { Component, OnInit, DoCheck, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements OnInit,DoCheck,AfterContentInit {

  constructor() { }

  ngAfterContentInit(): void {
    
  }
  
  ngDoCheck(): void {
    
  }

  ngOnInit() {
  }

}
