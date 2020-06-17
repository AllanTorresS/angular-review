import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuprimeiroComponente } from './meu-primeiro/meu-primeiro.component';
import { CursoModule } from './curso/curso.module';
import { CursoService } from './curso/cursoService.service';
import { DataBindComponent } from './dataBind/dataBind.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { TwoWayDatabindComponent } from './two-way-databind/two-way-databind.component';
import { InputPropertiesComponent } from './input-properties/input-properties.component';
import { BotaoIncrementarComponent } from './botao-incrementar/botao-incrementar.component';

@NgModule({
   declarations: [
      AppComponent,
      MeuprimeiroComponente,
      DataBindComponent,
      EventBindComponent,
      TwoWayDatabindComponent,
      InputPropertiesComponent,
      BotaoIncrementarComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      CursoModule,
      FormsModule
   ],
   providers: [
      CursoService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
