import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from 'src/app/components/pages/dashboard/dashboard.component';
import { DespesasComponent } from 'src/app/components/pages/dashboard/dialog/despesas/despesas.component';
import { FaturamentoComponent } from 'src/app/components/pages/dashboard/dialog/faturamento/faturamento.component';
import { NascimentoComponent } from 'src/app/components/pages/dashboard/dialog/nascimento/nascimento.component';
import { RankingComponent } from 'src/app/components/pages/dashboard/dialog/ranking/ranking.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DespesasComponent,
    FaturamentoComponent,
    NascimentoComponent,
    RankingComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    DashboardComponent,
    DespesasComponent,
    FaturamentoComponent,
    NascimentoComponent,
    RankingComponent
  ],
})
export class DashboardModule { }
