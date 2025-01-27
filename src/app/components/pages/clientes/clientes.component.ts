import { Component, HostListener, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacaoComponent } from '../../dialogs/confirmacao/confirmacao.component';
import { ConfirmacaoService } from 'src/app/resources/services/Confirmacao/confirmacao.service';
import { Cliente_DATA } from 'src/database/Cliente';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/resources/model/Cliente';
import { ClientesDialogComponent } from './clientes-dialog/clientes-dialog.component';
import { TemplateCrudService } from 'src/app/resources/services/Template/template-crud.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})

export class ClientesComponent {

  isActive = false;

  constructor(
    public dialog: MatDialog,
    private templateService: TemplateCrudService,
  ) { }

  @HostListener('window:keydown.control.y', ['$event'])
  handleSave(event: KeyboardEvent) {
    event.preventDefault();
    this.openDialogCliente('500ms', '250ms')
  }

  dataSource = new MatTableDataSource<Cliente>(Cliente_DATA);

  @ViewChild(MatSort) sort!: MatSort
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  openDialogCliente(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ClientesDialogComponent, {
      autoFocus: false,
      minWidth: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
      data: []
    });
  }

  openDialogUpdateCliente(enterAnimationDuration: string, exitAnimationDuration: string, data: any): void {
    this.dialog.open(ClientesDialogComponent, {
      autoFocus: false,
      minWidth: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
      data: data
    });
  }

  openDialogDelete(enterAnimationDuration: string, exitAnimationDuration: string, cliente: string): void {
    const dialogRef = this.dialog.open(ConfirmacaoComponent, {
      width: '80%',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        nome: cliente,
        message: "Deseja deletar o cliente:"
      }
    });

    dialogRef.afterClosed().subscribe((confirm: boolean) => {
      if (confirm) {
        this.templateService.snackBarSuccess("Cliente deletado com sucesso!", "")
      }
    })
  }

  displayedColumns: string[] = [
    'cliente',
    'localizacao',
    'email',
    'telefone',
    'telefone2',
    'acoes'
  ];
}