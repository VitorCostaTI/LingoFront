import { Component }             from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DespesasComponent }     from './dialog/despesas/despesas.component';
import { FaturamentoComponent }  from './dialog/faturamento/faturamento.component';
import { NascimentoComponent }   from './dialog/nascimento/nascimento.component';
import { RankingComponent }      from './dialog/ranking/ranking.component';

export interface DespesaElement {
  data: Date;
  cliente: string;
  pet: string;
  servico: string;
  telefone: string;
}

const ELEMENT_DATA: DespesaElement[] = [
  {data: new Date('2021-04-19T10:00:00.000'), cliente: 'Marcela Maya Luiza da Paz', pet: 'Tobel', servico: 'Tosa', telefone: '(88) 2726-1456'},
  {data: new  Date('2021-04-21T10:00:00.000'), cliente: 'Marlene Nicole Eduarda Silva', pet: 'Taone', servico: 'Banho', telefone: '(14) 2915-2920'},
  {data: new Date('2021-04-22T10:00:00.000'), cliente: 'Cauê Daniel Carlos Moreira', pet: 'Cyepe', servico: 'Passeio', telefone: '(84) 2630-6718'},
  {data: new Date('2021-04-23T10:00:00.000'), cliente: 'Gabriel Julio Geraldo Ramos', pet: 'Launo', servico: 'Hospedagem', telefone: '(82) 2375-2185'},
];

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
  
  dataSource = ELEMENT_DATA;
}