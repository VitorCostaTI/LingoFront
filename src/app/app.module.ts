import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from './modules/shared/shared.module';
import { FaturamentoComponent } from './components/dashboard/dialog/faturamento/faturamento.component';
import { DespesasComponent } from './components/dashboard/dialog/despesas/despesas.component';
import { NascimentoComponent } from './components/dashboard/dialog/nascimento/nascimento.component';
import { RankingComponent } from './components/dashboard/dialog/ranking/ranking.component';
import { ConfiguracoesComponent } from './components/dashboard/dialog/configuracoes/configuracoes.component';
import { NotificacoesComponent } from './components/dashboard/dialog/notificacoes/notificacoes.component';
import { NavegacaoComponent } from './components/navegacao/navegacao.component';

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
    NavegacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
