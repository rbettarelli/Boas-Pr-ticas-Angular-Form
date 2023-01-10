import { MensagemModule } from './../componente/mensagem/mensagem.module';
import { MensagemComponent } from './../componente/mensagem/mensagem.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, LoginComponent, NovoUsuarioComponent],
  imports: [CommonModule,
    HomeRoutingModule, FormsModule, SharedModule],
  exports: [HomeComponent],
})
export class HomeModule {}
