import { Injectable } from '@angular/core';

@Injectable()
export class CursoService {
  listaDeCursos: String[] = [];

  constructor() {
    this.listaDeCursos.push('Java');
    this.listaDeCursos.push('C++');
  }

  getCursos() {
    return this.listaDeCursos;
  }
}
