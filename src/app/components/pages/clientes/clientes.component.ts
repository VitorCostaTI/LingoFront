import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ClientesDialogComponent } from './clientes-dialog/clientes-dialog.component';
import { ConfirmacaoComponent } from '../../dialogs/confirmacao/confirmacao.component';
import { ConfirmacaoService } from 'src/app/modules/services/Confirmacao/confirmacao.service';
import { ClientesUpdateDialogComponent } from './clientes-update-dialog/clientes-update-dialog.component';
import { Cliente_DATA } from 'src/Database/Cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})

export class ClientesComponent {

  constructor(public dialog: MatDialog, private confirmacaoService: ConfirmacaoService) { }

  isActive = false;

  openDialogCliente(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ClientesDialogComponent, {
      minWidth: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDialogUpdateCliente(enterAnimationDuration: string, exitAnimationDuration: string, cliente: any): void {
    this.dialog.open(ClientesUpdateDialogComponent, {
      minWidth: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
      data: cliente
    });
  }

  openDialogDelete(enterAnimationDuration: string, exitAnimationDuration: string, nome: string): void {
    this.confirmacaoService.acao = "deletar";
    this.confirmacaoService.nome = nome;
    this.dialog.open(ConfirmacaoComponent, {
      width: '80%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  displayedColumns: string[] = [
    'cliente',
    'localizacao',
    'email',
    'telefone',
    'telefone2',
    'acoes'
  ];

  dataSource = Cliente_DATA;
}