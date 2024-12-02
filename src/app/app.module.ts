// Funcionalidades do Angular

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos Compartilhados

import { SharedModule } from './modules/shared/shared.module';

//Pages

import { AuditoriaComponent } from './components/pages/auditoria/auditoria.component';
import { ComunidadeComponent } from './components/pages/comunidade/comunidade.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { EstoqueComponent } from './components/pages/estoque/estoque.component';

// Componentes

import { ConfiguracoesComponent } from './components/dialogs/configuracoes/configuracoes.component';
import { DespesasComponent } from './components/pages/dashboard/dialog/despesas/despesas.component';
import { Error404Component } from './components/error404/error404.component';
import { FaturamentoComponent } from './components/pages/dashboard/dialog/faturamento/faturamento.component';
import { NavegacaoComponent } from './components/navegacao/navegacao.component';
import { NascimentoComponent } from './components/pages/dashboard/dialog/nascimento/nascimento.component';
import { NotificacoesComponent } from './components/dialogs/notificacoes/notificacoes.component';
import { RankingComponent } from './components/pages/dashboard/dialog/ranking/ranking.component';

// Máscara

import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './components/account/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ConfirmacaoComponent } from './components/dialogs/confirmacao/confirmacao.component';
import { NotesComponent } from './components/notes/notes.component';

import { ClientesModule } from './modules/modules/clientes/clientes.module';
import { AutomacoesModule } from './modules/modules/automacoes/automacoes.module';
import { EmpresasModule } from './modules/modules/empresas/empresas.module';
import { PermissaoModule } from './modules/modules/permissao/permissao.module';
import { ProdutosModule } from './modules/modules/produtos/produtos.module';
import { UsuariosModule } from './modules/modules/usuarios/usuarios.module';
import { OrdemServicoModule } from './modules/modules/ordem-servico/ordem-servico.module';

@NgModule({
  declarations: [
    AppComponent,

    AuditoriaComponent,

    ConfiguracoesComponent,

    ComunidadeComponent,

    DashboardComponent,

    DespesasComponent,

    EstoqueComponent,

    Error404Component,

    FaturamentoComponent,

    NavegacaoComponent,

    NascimentoComponent,

    NotificacoesComponent,

    RankingComponent,

    LoginComponent,
    HomeComponent,
    ConfirmacaoComponent,
    NotesComponent,
  ],

  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,

    SharedModule,

    AutomacoesModule,
    EmpresasModule,
    ClientesModule,
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