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

import { DashboardComponent }                   from './components/pages/dashboard/dashboard.component';

import { DespesasComponent }                    from './components/pages/dashboard/dialog/despesas/despesas.component';

import { EmpresasComponent }                    from './components/pages/empresas/empresas.component';
import { EmpresasdialogComponent }              from './components/pages/empresas/empresasdialog/empresasdialog.component';

import { EstoqueComponent }                     from './components/pages/estoque/estoque.component';
import { EstoqueDialogComponent }               from './components/pages/estoque/estoque-dialog/estoque-dialog.component';

import { Error404Component }                    from './components/pages/error404/error404.component';

import { DepartamentoComponent }                from './components/pages/departamento/departamento.component';

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

import { ProdutosComponent }                    from './components/pages/produtos/produtos.component';
import { ProdutosDialogComponent }              from './components/pages/produtos/dialog/produtos-dialog/produtos-dialog.component';

import { RankingComponent }                     from './components/pages/dashboard/dialog/ranking/ranking.component';

import { UsuarioComponent }                     from './components/pages/usuario/usuario.component';
import { UsuariosDialogComponent }              from './components/pages/usuario/usuarios-dialog/usuarios-dialog.component';

// Máscara

import { NgxMaskModule }      from 'ngx-mask';
import { CurrencyMaskModule } from "ng2-currency-mask";

@NgModule({
  declarations: [
    AppComponent,

    AuditoriaComponent,

    CartaoComponent,
    
    ClientesComponent,
    ClientesDialogComponent,
        
    ConfiguracoesComponent,

    DashboardComponent,

    DespesasComponent,

    DepartamentoComponent,
    
    EmpresasComponent,
    EmpresasdialogComponent,

    EstoqueComponent,
    EstoqueDialogComponent,
    
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
  ],

  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CurrencyMaskModule,
    NgxMaskModule.forRoot(),
    SharedModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
