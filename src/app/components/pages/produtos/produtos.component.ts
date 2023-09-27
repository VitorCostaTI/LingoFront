import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ProdutosDialogComponent } from './dialog/produtos-dialog/produtos-dialog.component';

export interface DespesaElement {
  produto: string;
  fornecedor: string;
  preco: string;
  investimento: string;
  qtd: string;
}

const ELEMENT_DATA: DespesaElement[] = [
  {produto: 'Iphone', fornecedor: 'Apple', preco: 'R$ 6.000,00', investimento: 'R$ 3.000,00', qtd: '82'},
  {produto: 'Iphone', fornecedor: 'Apple', preco: 'R$ 6.000,00', investimento: 'R$ 3.000,00', qtd: '82'},
  {produto: 'Iphone', fornecedor: 'Apple', preco: 'R$ 6.000,00', investimento: 'R$ 3.000,00', qtd: '82'},
  {produto: 'Iphone', fornecedor: 'Apple', preco: 'R$ 6.000,00', investimento: 'R$ 3.000,00', qtd: '82'},
  {produto: 'Iphone', fornecedor: 'Apple', preco: 'R$ 6.000,00', investimento: 'R$ 3.000,00', qtd: '82'},
  {produto: 'Iphone', fornecedor: 'Apple', preco: 'R$ 6.000,00', investimento: 'R$ 3.000,00', qtd: '82'},
  {produto: 'Iphone', fornecedor: 'Apple', preco: 'R$ 6.000,00', investimento: 'R$ 3.000,00', qtd: '82'},
  {produto: 'Iphone', fornecedor: 'Apple', preco: 'R$ 6.000,00', investimento: 'R$ 3.000,00', qtd: '82'},
  {produto: 'Iphone', fornecedor: 'Apple', preco: 'R$ 6.000,00', investimento: 'R$ 3.000,00', qtd: '82'},
  {produto: 'Iphone', fornecedor: 'Apple', preco: 'R$ 6.000,00', investimento: 'R$ 3.000,00', qtd: '82'},
  
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
