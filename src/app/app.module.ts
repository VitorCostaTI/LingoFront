// Funcionalidades do Angular

import { AppRoutingModule }        from './app-routing.module';
import { AppComponent }            from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule }           from '@angular/platform-browser';
import { NgModule }                from '@angular/core';

// Modulos Compartilhados

import { SharedModule } from './modules/shared/shared.module';

// Componentes

import { AuditoriaComponent }                   from './components/pages/auditoria/auditoria.component';

import { CartaoComponent }                      from './components/cartao/cartao.component';

import { ClientesComponent }                    from './components/pages/clientes/clientes.component';
import { ClientesDialogComponent }              from './components/pages/clientes/clientes-dialog/clientes-dialog.component';

import { ConfiguracoesComponent }               from './components/dialogs/configuracoes/configuracoes.component';

import { ComunidadeComponent }                  from './components/pages/comunidade/comunidade.component';

import { DashboardComponent }                   from './components/pages/dashboard/dashboard.component';

import { DespesasComponent }                    from './components/pages/dashboard/dialog/despesas/despesas.component';

import { EmpresasComponent }                    from './components/pages/empresas/empresas.component';
import { EmpresasdialogComponent }              from './components/pages/empresas/empresas-dialog/empresas-dialog.component';

import { EstoqueComponent }                     from './components/pages/estoque/estoque.component';

import { Error404Component }                    from './components/error404/error404.component';

import { FaturamentoComponent }                 from './components/pages/dashboard/dialog/faturamento/faturamento.component';

import { NavegacaoComponent }                   from './components/navegacao/navegacao.component';

import { NascimentoComponent }                  from './components/pages/dashboard/dialog/nascimento/nascimento.component';

import { NotificacoesComponent }                from './components/dialogs/notificacoes/notificacoes.component';

import { OrdemServicoComponent }                from './components/pages/ordem-servico/ordem-servico.component';
import { OrdemServicoDialogAddComponent }       from './components/pages/ordem-servico/ordem-servico-dialog-add/ordem-servico-dialog-add.component';
import { OrdemServicoDialogFinishComponent }    from './components/pages/ordem-servico/ordem-servico-dialog-finish/ordem-servico-dialog-finish.component';
import { OrdemServicoDialogRelatorioComponent } from './components/pages/ordem-servico/ordem-servico-dialog-relatorio/ordem-servico-dialog-relatorio.component';
import { OrdemServicoDialogUpdateComponent }    from './components/pages/ordem-servico/ordem-servico-dialog-update/ordem-servico-dialog-update.component';

import { PermissaoAcessoComponent }             from './components/pages/permissao-acesso/permissao-acesso.component';
import { PermissaoAcessoDialogComponent }       from './components/pages/permissao-acesso/permissao-acesso-dialog/permissao-acesso-dialog.component';

import { ProdutosComponent }                    from './components/pages/produtos/produtos.component';
import { ProdutosDialogComponent }              from './components/pages/produtos/produtos-dialog/produtos-dialog.component';

import { RankingComponent }                     from './components/pages/dashboard/dialog/ranking/ranking.component';

import { UsuarioComponent }                     from './components/pages/usuario/usuario.component';
import { UsuariosDialogComponent }              from './components/pages/usuario/usuarios-dialog/usuarios-dialog.component';

// Máscara

import { NgxMaskModule }      from 'ngx-mask';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/account/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ConfirmacaoComponent } from './components/dialogs/confirmacao/confirmacao.component';
import { AutomacaoComponent } from './components/pages/automacao/automacao.component';
import { ClientesUpdateDialogComponent } from './components/pages/clientes/clientes-update-dialog/clientes-update-dialog.component';
import { EmpresasUpdateDialogComponent } from './components/pages/empresas/empresas-update-dialog/empresas-update-dialog.component';
import { ProdutosUpdateDialogComponent } from './components/pages/produtos/produtos-update-dialog/produtos-update-dialog.component';
import { NotesComponent } from './components/notes/notes.component';
import { UsuarioDialogUpdateComponent } from './components/pages/usuario/usuario-dialog-update/usuario-dialog-update.component';
import { AutomacoesDialogComponent } from './components/pages/automacao/automacoes-dialog/automacoes-dialog.component';
import { AutomacoesUpdateDialogComponent } from './components/pages/automacao/automacoes-update-dialog/automacoes-update-dialog.component';
import { AutomacoesControlTimeComponent } from './components/pages/automacao/automacoes-control-time/automacoes-control-time.component';
import { AutomacoesMonitoramentoComponent } from './components/pages/automacao/automacoes-monitoramento/automacoes-monitoramento.component';

@NgModule({
  declarations: [
    AppComponent,

    AuditoriaComponent,

    CartaoComponent,
    
    ClientesComponent,
    ClientesDialogComponent,
        
    ConfiguracoesComponent,

    ComunidadeComponent,

    DashboardComponent,

    DespesasComponent,
    
    EmpresasComponent,
    EmpresasdialogComponent,

    EstoqueComponent,
    
    Error404Component,

    FaturamentoComponent,

    NavegacaoComponent,

    NascimentoComponent,

    NotificacoesComponent,
    
    OrdemServicoComponent,
    OrdemServicoDialogAddComponent,
    OrdemServicoDialogFinishComponent,
    OrdemServicoDialogRelatorioComponent,
    OrdemServicoDialogUpdateComponent,
    
    ProdutosComponent,
    ProdutosDialogComponent,
    
    RankingComponent,

    UsuarioComponent,
    UsuariosDialogComponent,

    PermissaoAcessoComponent,
    PermissaoAcessoDialogComponent,
    LoginComponent,
    HomeComponent,
    ConfirmacaoComponent,
    AutomacaoComponent,
    ClientesUpdateDialogComponent,
    EmpresasUpdateDialogComponent,
    ProdutosUpdateDialogComponent,
    NotesComponent,
    UsuarioDialogUpdateComponent,
    AutomacoesDialogComponent,
    AutomacoesUpdateDialogComponent,
    AutomacoesControlTimeComponent,
    AutomacoesMonitoramentoComponent,
  ],

  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CurrencyMaskModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }