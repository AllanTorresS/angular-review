import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuprimeiroComponente } from './meu-primeiro/meu-primeiro.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuprimeiroComponente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
