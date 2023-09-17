import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from './modules/shared/shared.module';
import { FaturamentoComponent } from './components/dashboard/dialog/faturamento/faturamento.component';
import { DespesasComponent } from './components/dashboard/dialog/despesas/despesas.component';
import { NascimentoComponent } from './components/dashboard/dialog/nascimento/nascimento.component';
import { RankingComponent } from './components/dashboard/dialog/ranking/ranking.component';
import { ConfiguracoesComponent } from './components/dashboard/dialog/configuracoes/configuracoes.component';
import { NotificacoesComponent } from './components/dashboard/dialog/notificacoes/notificacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashboardComponent,
    FaturamentoComponent,
    DespesasComponent,
    NascimentoComponent,
    RankingComponent,
    ConfiguracoesComponent,
    NotificacoesComponent
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
