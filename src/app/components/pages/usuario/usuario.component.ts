import { Component, HostListener, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacaoComponent } from '../../dialogs/confirmacao/confirmacao.component';
import { ConfirmacaoService } from 'src/app/resources/services/Confirmacao/confirmacao.service';
import { UsuarioDialogComponent } from './usuario-dialog/usuario-dialog.component';
import { Colaborador_DATA } from 'src/database/Colaborador';
import { MatTableDataSource } from '@angular/material/table';
import { Colaborador } from 'src/app/resources/model/Colaborador';
import { MatSort } from '@angular/material/sort';
import { TemplateCrudService } from 'src/app/resources/services/Template/template-crud.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})

export class UsuarioComponent {

  isActive = false;

  dataSource = new MatTableDataSource<Colaborador>(Colaborador_DATA);

  constructor(
    public dialog: MatDialog,
    private templateService: TemplateCrudService,
  ) { }

  @ViewChild(MatSort) sort!: MatSort
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort
  }

  @HostListener('window:keydown.control.y', ['$event'])
  handleSave(event: KeyboardEvent) {
    event.preventDefault();
    this.openDialogColaborador('500ms', '250ms')
  }

  openDialogColaborador(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(UsuarioDialogComponent, {
      autoFocus: false,
      width: '800px',
      height: '63%',
      enterAnimationDuration,
      exitAnimationDuration,
      data: []
    });
  }

  openDialogUpdate(enterAnimationDuration: string, exitAnimationDuration: string, data: any): void {
    this.dialog.open(UsuarioDialogComponent, {
      width: '800px',
      height: '63%',
      enterAnimationDuration,
      exitAnimationDuration,
      data: data
    });
  }

  openDialogDelete(enterAnimationDuration: string, exitAnimationDuration: string, usuario: any): void {
    const dialogRef = this.dialog.open(ConfirmacaoComponent, {
      width: '80%',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        nome: usuario.colaborador,
        message: "Deseja deletar o usuario:"
      }
    });
    dialogRef.afterClosed().subscribe((confirm: boolean) => {
      if (confirm) {
        this.templateService.snackBarSuccess("Usuario deletado com sucesso", "");
      }
    })

  }

  displayedColumns: string[] = [
    'colaborador',
    'setor',
    'localizacao',
    'email',
    'telefone',
    'telefone2',
    'acoes'
  ];
}