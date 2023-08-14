import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DespesasComponent } from '../dashboard/dialog/despesas/despesas.component';
import { FaturamentoComponent } from '../dashboard/dialog/faturamento/faturamento.component';
import { ReceitasComponent } from '../dashboard/dialog/receitas/receitas.component';
import { NascimentoComponent } from '../dashboard/dialog/nascimento/nascimento.component';
import { RankingComponent } from '../dashboard/dialog/ranking/ranking.component';
import { VendasComponent } from '../dashboard/dialog/vendas/vendas.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(public dialog: MatDialog) {}

  isActive = false;

  openDialogFaturamento(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(FaturamentoComponent, {
      width: '750px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  penDialogDespesas(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DespesasComponent, {
      width: '750px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  penDialogReceita(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ReceitasComponent, {
      width: '750px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDialogNascimento(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(NascimentoComponent, {
      width: '750px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  penDialogRanking(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(RankingComponent, {
      width: '750px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  penDialogVendas(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(VendasComponent, {
      width: '750px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
