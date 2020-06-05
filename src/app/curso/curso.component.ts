import { Component, OnInit } from '@angular/core';

import { CursoService } from './cursoService.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
})
export class CursoComponent implements OnInit {
  nomeDoPortal: String;
  listaDeCursos: String[];

  constructor(private cursoService: CursoService) {
    this.listaDeCursos = this.cursoService.getCursos();

    this.nomeDoPortal = 'Allan';
  }

  ngOnInit() {}
}
