import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-botao-incrementar',
  templateUrl: './botao-incrementar.component.html',
  styleUrls: ['./botao-incrementar.component.css'],
})
export class BotaoIncrementarComponent implements OnInit {
  @Output() broadcast: EventEmitter<Object> = new EventEmitter();
  @Input() total: number;

  constructor() {}

  incrementa() {
    ++this.total;
    this.broadcast.emit({"mudou":this.total});
  }

  decrementa() {
    --this.total;
    this.broadcast.emit({"mudou":this.total});
  }
  ngOnInit() {}
}
