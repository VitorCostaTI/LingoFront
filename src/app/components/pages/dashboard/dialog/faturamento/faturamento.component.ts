import { Component } from '@angular/core';

export interface FaturamentoElement {
  faturamento: string;
  descricao: string;
  Oservico: string;
}

const ELEMENT_DATA: FaturamentoElement[] = [
  {faturamento: 'R$1.200,00', descricao: 'Produto vendido', Oservico: '0079'},
  {faturamento: 'R$1.200,00', descricao: 'Produto vendido', Oservico: '0079'},
  {faturamento: 'R$1.200,00', descricao: 'Produto vendido', Oservico: '0079'},
  {faturamento: 'R$1.200,00', descricao: 'Produto vendido', Oservico: '0079'},
];

@Component({
  selector: 'app-faturamento',
  templateUrl: './faturamento.component.html',
  styleUrls: ['./faturamento.component.scss']
})
export class FaturamentoComponent {
  displayedColumns: string[] = ['faturamento', 'descricao', 'Oservico'];
  dataSource = ELEMENT_DATA;
}
