// Angular

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos Compartilhados

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './resources/shared/shared.module';

// Pages

import { ClientesModule } from './resources/modules/clientes/clientes.module';
import { AutomacoesModule } from './resources/modules/automacoes/automacoes.module';
import { EmpresasModule } from './resources/modules/empresas/empresas.module';
import { PermissaoModule } from './resources/modules/permissao/permissao.module';
import { ProdutosModule } from './resources/modules/produtos/produtos.module';
import { UsuariosModule } from './resources/modules/usuarios/usuarios.module';
import { OrdemServicoModule } from './resources/modules/ordem-servico/ordem-servico.module';
import { AuditoriaModule } from './resources/modules/auditoria/auditoria.module';
import { ComunidadeModule } from './resources/modules/comunidade/comunidade.module';
import { ConfiguracaoModule } from './resources/modules/configuracao/configuracao.module';
import { DashboardModule } from './resources/modules/dashboard/dashboard.module';
import { EstoqueModule } from './resources/modules/estoque/estoque.module';
import { LoginModule } from './resources/modules/login/login.module';
import { HomeModule } from './resources/modules/home/home.module';
import { HomeComponent } from './components/pages/home/home.component';
import { NavegacaoComponent } from './components/add-on/navegacao/navegacao.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavegacaoComponent
  ],

  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
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