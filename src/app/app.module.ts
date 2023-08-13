import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from './modules/shared/shared.module';
import { FaturamentoComponent } from './components/dialog/faturamento/faturamento.component';
import { DespesasComponent } from './components/dialog/despesas/despesas.component';
import { ReceitasComponent } from './components/dialog/receitas/receitas.component';
import { NascimentoComponent } from './components/dialog/nascimento/nascimento.component';
import { RankingComponent } from './components/dialog/ranking/ranking.component';
import { VendasComponent } from './components/dialog/vendas/vendas.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashboardComponent,
    FaturamentoComponent,
    DespesasComponent,
    ReceitasComponent,
    NascimentoComponent,
    RankingComponent,
    VendasComponent
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
