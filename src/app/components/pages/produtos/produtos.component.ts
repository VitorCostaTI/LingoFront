import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProdutosDialogComponent } from './produtos-dialog/produtos-dialog.component';
import { ConfirmacaoService } from 'src/app/modules/services/Confirmacao/confirmacao.service';
import { ConfirmacaoComponent } from '../../dialogs/confirmacao/confirmacao.component';
import { ProdutosUpdateDialogComponent } from './produtos-update-dialog/produtos-update-dialog.component';

export interface ProdutoElement {
  produto: string;
  fornecedor: string;
  preco: string;
  categoria: string;
  codigo_produto: string;
  investimento: string;
  quantidade: string;
}

const ELEMENT_DATA: ProdutoElement[] = [
  {
    produto: 'Shampoo',
    fornecedor: 'Meau',
    preco: 'R$ 7,40',
    investimento: 'R$ 4,00',
    quantidade: '92',
    categoria: 'Banho',
    codigo_produto: '001256'
  },
  {
    produto: 'Condicionador',
    fornecedor: 'Meau',
    preco: 'R$ 12,00',
    investimento: 'R$ 6,00',
    quantidade: '75',
    categoria: 'Higiene',
    codigo_produto: '0075'
  },
  {
    produto: 'Perfume Dog Macho',
    fornecedor: 'Pet Clean',
    preco: 'R$ 16,00',
    investimento: 'R$ 9,00',
    quantidade: '30',
    categoria: 'Perfumes',
    codigo_produto: '006258'
  },
  {
    produto: 'Perfume Dog Femea',
    fornecedor: 'Pet Clean',
    preco: 'R$ 18,00',
    investimento: 'R$ 9,00',
    quantidade: '25',
    categoria: 'Perfumes',
    codigo_produto: '0092'
  },
  {
    produto: 'Coleira',
    fornecedor: 'Mesh Reserva',
    preco: 'R$ 149,90',
    investimento: 'R$ 74,00',
    quantidade: '12',
    categoria: 'Acessório',
    codigo_produto: '002253'
  },
  {
    produto: 'Ração',
    fornecedor: 'Special Dog',
    preco: 'R$ 249,90',
    investimento: 'R$ 74,00',
    quantidade: '18',
    categoria: 'Alimento',
    codigo_produto: '0018'
  },
  {
    produto: 'Brinquedo Osso',
    fornecedor: 'Genérico',
    preco: 'R$ 1,90',
    investimento: 'R$ 0,50',
    quantidade: '9',
    categoria: 'Brinquedo',
    codigo_produto: '008257'
  },
  {
    produto: 'Rastreador Ocultaneo',
    fornecedor: 'Genérico',
    preco: 'R$ 1,90',
    investimento: 'R$ 0,80',
    quantidade: '13',
    categoria: 'Acessório',
    codigo_produto: '0013'
  },
  {
    produto: 'V10',
    fornecedor: 'Nobivac',
    preco: 'R$ 249,00',
    investimento: 'R$ 149,00',
    quantidade: '16',
    categoria: 'Medicamento',
    codigo_produto: '0016'
  },
  {
    produto: 'Vermifugo',
    fornecedor: 'Milbemax',
    preco: 'R$ 249,00',
    investimento: 'R$ 149,00',
    quantidade: '2', 
    categoria: 'Medicamento',
    codigo_produto: '004252'
  },
];

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent {

  constructor(public dialog: MatDialog, private confirmacaoService: ConfirmacaoService) { }

  isActive = false;

  openDialogProduto(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ProdutosDialogComponent, {
      minWidth: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  };

  openDialogUpdateProduto(enterAnimationDuration: string, exitAnimationDuration: string, produto: any): void {
    this.dialog.open(ProdutosUpdateDialogComponent, {
      minWidth: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
      data: produto
    });
    console.log(produto)
  };

  openDialogDelete(enterAnimationDuration: string, exitAnimationDuration: string, razao_social: string): void {
    this.confirmacaoService.acao = "deletar";
    this.confirmacaoService.nome = razao_social;
    this.dialog.open(ConfirmacaoComponent, {
      width: '80%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  };

  displayedColumns: string[] = [
    'produto',
    'fornecedor',
    'preco',
    'investimento',
    'quantidade',
    'acoes'
  ];

  dataSource = ELEMENT_DATA;
}