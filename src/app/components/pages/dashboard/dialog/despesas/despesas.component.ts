import { Component } from '@angular/core';

export interface DespesaElement {
  custo: string;
  descricao: string;
  Oservico: string;
}

const ELEMENT_DATA: DespesaElement[] = [
  {
    custo: 'R$1.200,00',
    descricao: 'Despesa',
    Oservico: '0079'
  },
  {
    custo: 'R$1.200,00',
    descricao: 'Despesa',
    Oservico: '0079'
  },
  {
    custo: 'R$1.200,00',
    descricao: 'Despesa',
    Oservico: '0079'
  },
  {
    custo: 'R$1.200,00',
    descricao: 'Despesa',
    Oservico: '0079'
  },
];

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.scss']
})

export class DespesasComponent {
  displayedColumns: string[] = [
    'custo',
    'descricao',
    'Oservico'
  ];
  
  dataSource = ELEMENT_DATA;
}