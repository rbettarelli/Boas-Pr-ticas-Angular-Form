import { RodapeModule } from './componentes/rodape/rodape.module';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { HttpClientModule } from '@angular/common/http';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, CabecalhoModule, RodapeModule, AutenticacaoModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
