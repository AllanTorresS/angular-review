import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuprimeiroComponente } from './meu-primeiro/meu-primeiro.component';
import { CursoModule } from './curso/curso.module';
import { CursoService } from './curso/cursoService.service';
import { DataBindComponent } from './dataBind/dataBind.component';

@NgModule({
   declarations: [
      AppComponent,
      MeuprimeiroComponente,
      DataBindComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      CursoModule
   ],
   providers: [
      CursoService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
