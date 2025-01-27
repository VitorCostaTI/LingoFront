import { Component, HostListener, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProdutosDialogComponent } from './produtos-dialog/produtos-dialog.component';
import { ConfirmacaoService } from 'src/app/resources/services/Confirmacao/confirmacao.service';
import { ConfirmacaoComponent } from '../../dialogs/confirmacao/confirmacao.component';
import { Produto_DATA } from 'src/database/Produto';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Produto } from 'src/app/resources/model/Produto';
import { TemplateCrudService } from 'src/app/resources/services/Template/template-crud.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})

export class ProdutosComponent {

  isActive = false;

  constructor(
    public dialog: MatDialog,
    private templateService: TemplateCrudService,
  ) { }

  dataSource = new MatTableDataSource<Produto>(Produto_DATA)

  @ViewChild(MatSort) sort!: MatSort
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort
  }

  @HostListener('window:keydown.control.y', ['$event'])
  handleSave(event: KeyboardEvent) {
    event.preventDefault();
    this.openDialogProduto('500ms', '250ms')
  }

  openDialogProduto(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ProdutosDialogComponent, {
      autoFocus: false,
      minWidth: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
      data: []
    });
  };

  openDialogUpdateProduto(enterAnimationDuration: string, exitAnimationDuration: string, data: any): void {
    this.dialog.open(ProdutosDialogComponent, {
      autoFocus: false,
      minWidth: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
      data: data
    });
  };

  openDialogDelete(enterAnimationDuration: string, exitAnimationDuration: string, produto: string): void {
    const dialogRef = this.dialog.open(ConfirmacaoComponent, {
      width: '80%',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        nome: produto,
        message: "Deseja deletar o produto:"
      }
    });

    dialogRef.afterClosed().subscribe((confirm: boolean) => {
      if (confirm) {
        this.templateService.snackBarSuccess("Deseja deletar o produto:" ,"")
      }
    })
  };

  displayedColumns: string[] = [
    'produto',
    'fornecedor',
    'preco',
    'investimento',
    'quantidade',
    'acoes'
  ];
}