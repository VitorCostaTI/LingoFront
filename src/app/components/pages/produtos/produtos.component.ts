import { Component }               from '@angular/core';
import { MatDialog }               from '@angular/material/dialog';
import { ProdutosDialogComponent } from './dialog/produtos-dialog/produtos-dialog.component';

export interface ProdutoElement {
  produto: string;
  fornecedor: string;
  preco: string;
  investimento: string;
  qtd: string;
}

const ELEMENT_DATA: ProdutoElement[] = [
  {
    produto: 'Shampoo', 
    fornecedor: 'Meau', 
    preco: 'R$ 7,40', 
    investimento: 'R$ 4,00', 
    qtd: '92'
  },
  {
    produto: 'Condicionador', 
    fornecedor: 'Meau', 
    preco: 'R$ 12,00', 
    investimento: 'R$ 6,00', 
    qtd: '75'
  },
  {
    produto: 'Perfume Dog Macho', 
    fornecedor: 'Pet Clean', 
    preco: 'R$ 16,00', 
    investimento: 'R$ 9,00', 
    qtd: '30'
  },
  {
    produto: 'Perfume Dog Femea', 
    fornecedor: 'Pet Clean', 
    preco: 'R$ 18,00', 
    investimento: 'R$ 9,00', 
    qtd: '25'
  },
  {
    produto: 'Coleira', 
    fornecedor: 'Mesh Reserva', 
    preco: 'R$ 149,90', 
    investimento: 'R$ 74,00', 
    qtd: '12'
  },
  {
    produto: 'Ração', 
    fornecedor: 'Special Dog', 
    preco: 'R$ 249,90', 
    investimento: 'R$ 74,00', 
    qtd: '18'
  },
  {
    produto: 'Brinquedo Osso', 
    fornecedor: 'Genérico', 
    preco: 'R$ 1,90', 
    investimento: 'R$ 0,50', 
    qtd: '9'
  },
  {
    produto: 'Rastreador Ocultaneo', 
    fornecedor: 'Genérico', 
    preco: 'R$ 1,90', 
    investimento: 'R$ 0,80', 
    qtd: '13'
  },
  {
    produto: 'V10', 
    fornecedor: 'Nobivac', 
    preco: 'R$ 249,00', 
    investimento: 'R$ 149,00', 
    qtd: '16'
  },
  {
    produto: 'Vermifugo', 
    fornecedor: 'Milbemax', 
    preco: 'R$ 249,00', 
    investimento: 'R$ 149,00', 
    qtd: '2'
  },
];

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent {

  constructor(public dialog: MatDialog) {}

  isActive = false;

  openDialogProduto(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ProdutosDialogComponent, {
      width: '750px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  displayedColumns: string[] = [
    'produto',
    'fornecedor',
    'preco', 
    'investimento',
    'qtd'
  ];

  dataSource = ELEMENT_DATA;
}
