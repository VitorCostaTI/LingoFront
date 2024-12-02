import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DespesasComponent } from './dialog/despesas/despesas.component';
import { FaturamentoComponent } from './dialog/faturamento/faturamento.component';
import { NascimentoComponent } from './dialog/nascimento/nascimento.component';
import { RankingComponent } from './dialog/ranking/ranking.component';
import { Agendamento_DATA } from 'src/database/Agendamento';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent {
  constructor(public dialog: MatDialog) { }

  isActive = false;

  openDialogFaturamento(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(FaturamentoComponent, {
      width: '750px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDialogDespesas(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DespesasComponent, {
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

  displayedColumns: string[] = [
    'data',
    'cliente',
    'pet',
    'servico',
    'telefone'
  ];

  dataSource = Agendamento_DATA;
}