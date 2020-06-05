import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuprimeiroComponente } from './meu-primeiro/meu-primeiro.component';
import { CursoModule } from './curso/curso.module';

@NgModule({
  declarations: [
    AppComponent,
    MeuprimeiroComponente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }