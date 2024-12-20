import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProdutosDialogComponent } from './produtos-dialog/produtos-dialog.component';
import { ConfirmacaoService } from 'src/app/resources/services/Confirmacao/confirmacao.service';
import { ConfirmacaoComponent } from '../../dialogs/confirmacao/confirmacao.component';
import { ProdutosUpdateDialogComponent } from './produtos-update-dialog/produtos-update-dialog.component';
import { Produto_DATA } from 'src/database/Produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})

export class ProdutosComponent {

  isActive = false;

  constructor(
    public dialog: MatDialog,
    private confirmacaoService: ConfirmacaoService
  ) { }

  @HostListener('window:keydown.control.y', ['$event'])
  handleSave(event: KeyboardEvent){
    event.preventDefault();
    this.openDialogProduto('500ms', '250ms')
  }

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

  dataSource = Produto_DATA;
}