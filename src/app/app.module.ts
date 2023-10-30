import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';
import { NavegacaoComponent } from './components/navegacao/navegacao.component';
import { ProdutosComponent } from './components/pages/produtos/produtos.component';
import { ColaboradorComponent } from './components/pages/colaborador/colaborador.component';
import { UsuarioComponent } from './components/pages/usuario/usuario.component';
import { DepartamentoComponent } from './components/pages/departamento/departamento.component';
import { MateriaisComponent } from './components/pages/materiais/materiais.component';
import { EmpresasComponent } from './components/pages/empresas/empresas.component';
import { ClientesComponent } from './components/pages/clientes/clientes.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { FaturamentoComponent } from './components/pages/dashboard/dialog/faturamento/faturamento.component';
import { DespesasComponent } from './components/pages/dashboard/dialog/despesas/despesas.component';
import { NascimentoComponent } from './components/pages/dashboard/dialog/nascimento/nascimento.component';
import { RankingComponent } from './components/pages/dashboard/dialog/ranking/ranking.component';
import { ConfiguracoesComponent } from './components/dialogs/configuracoes/configuracoes.component';
import { NotificacoesComponent } from './components/dialogs/notificacoes/notificacoes.component';
import { Error404Component } from './components/pages/error404/error404.component';
import { OrdemServicoComponent } from './components/pages/ordem-servico/ordem-servico.component';
import { EstoqueComponent } from './components/pages/estoque/estoque.component';
import { AuditoriaComponent } from './components/pages/auditoria/auditoria.component';
import { ProdutosDialogComponent } from './components/pages/produtos/dialog/produtos-dialog/produtos-dialog.component';
import { ClientesDialogComponent } from './components/pages/clientes/clientes-dialog/clientes-dialog.component';
import { OrdemServicoDialogAddComponent } from './components/pages/ordem-servico/ordem-servico-dialog-add/ordem-servico-dialog-add.component';
import { OrdemServicoDialogUpdateComponent } from './components/pages/ordem-servico/ordem-servico-dialog-update/ordem-servico-dialog-update.component';
import { OrdemServicoDialogRelatorioComponent } from './components/pages/ordem-servico/ordem-servico-dialog-relatorio/ordem-servico-dialog-relatorio.component';
import { OrdemServicoDialogFinishComponent } from './components/pages/ordem-servico/ordem-servico-dialog-finish/ordem-servico-dialog-finish.component';
import { CartaoComponent } from './components/cartao/cartao.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FaturamentoComponent,
    DespesasComponent,
    NascimentoComponent,
    RankingComponent,
    ConfiguracoesComponent,
    NotificacoesComponent,
    NavegacaoComponent,
    ProdutosComponent,
    ColaboradorComponent,
    UsuarioComponent,
    DepartamentoComponent,
    MateriaisComponent,
    EmpresasComponent,
    ClientesComponent,
    Error404Component,
    OrdemServicoComponent,
    EstoqueComponent,
    AuditoriaComponent,
    ProdutosDialogComponent,
    ClientesDialogComponent,
    OrdemServicoDialogAddComponent,
    OrdemServicoDialogUpdateComponent,
    OrdemServicoDialogRelatorioComponent,
    OrdemServicoDialogFinishComponent,
    CartaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
