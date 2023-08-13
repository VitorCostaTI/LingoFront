import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DespesasComponent } from '../dialog/despesas/despesas.component';
import { FaturamentoComponent } from '../dialog/faturamento/faturamento.component';
import { ReceitasComponent } from '../dialog/receitas/receitas.component';
import { NascimentoComponent } from '../dialog/nascimento/nascimento.component';
import { RankingComponent } from '../dialog/ranking/ranking.component';
import { VendasComponent } from '../dialog/vendas/vendas.component';
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
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  penDialogDespesas(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DespesasComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  penDialogReceita(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ReceitasComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDialogNascimento(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(NascimentoComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  penDialogRanking(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(RankingComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  penDialogVendas(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(VendasComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
