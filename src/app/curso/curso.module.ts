import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoComponent } from './curso.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CursoComponent, CursoDetalheComponent],
  exports: [CursoComponent],
})
export class CursoModule {}
