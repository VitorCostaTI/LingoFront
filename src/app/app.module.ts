// Funcionalidades do Angular

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos Compartilhados

import { SharedModule } from './modules/shared/shared.module';

// Componentes

// Máscara

import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { ClientesModule } from './modules/modules/clientes/clientes.module';
import { AutomacoesModule } from './modules/modules/automacoes/automacoes.module';
import { EmpresasModule } from './modules/modules/empresas/empresas.module';
import { PermissaoModule } from './modules/modules/permissao/permissao.module';
import { ProdutosModule } from './modules/modules/produtos/produtos.module';
import { UsuariosModule } from './modules/modules/usuarios/usuarios.module';
import { OrdemServicoModule } from './modules/modules/ordem-servico/ordem-servico.module';
import { AuditoriaModule } from './modules/modules/auditoria/auditoria.module';
import { ComunidadeModule } from './modules/modules/comunidade/comunidade.module';
import { ConfiguracaoModule } from './modules/modules/configuracao/configuracao.module';
import { DashboardModule } from './modules/modules/dashboard/dashboard.module';
import { EstoqueModule } from './modules/modules/estoque/estoque.module';
import { LoginModule } from './modules/modules/login/login.module';
import { HomeModule } from './modules/modules/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    SharedModule,

    AuditoriaModule,
    AutomacoesModule,
    ClientesModule,
    ComunidadeModule,
    ConfiguracaoModule,
    DashboardModule,
    EmpresasModule,
    EstoqueModule,
    HomeModule,
    LoginModule,
    OrdemServicoModule,
    PermissaoModule,
    ProdutosModule,
    UsuariosModule,
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }