import { Component, HostListener, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsuariosDialogComponent } from './usuarios-dialog/usuarios-dialog.component';
import { ConfirmacaoComponent } from '../../dialogs/confirmacao/confirmacao.component';
import { ConfirmacaoService } from 'src/app/resources/services/Confirmacao/confirmacao.service';
import { UsuarioDialogUpdateComponent } from './usuario-dialog-update/usuario-dialog-update.component';
import { Colaborador_DATA } from 'src/database/Colaborador';
import { MatTableDataSource } from '@angular/material/table';
import { Colaborador } from 'src/app/resources/model/Colaborador';
import { MatSort } from '@angular/material/sort';

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
    private confirmacaoService: ConfirmacaoService
  ) { }

  @ViewChild(MatSort) sort!: MatSort
  ngAfterViewInit(): void{
    this.dataSource.sort = this.sort
  }

  @HostListener('window:keydown.control.y', ['$event'])
  handleSave(event: KeyboardEvent) {
    event.preventDefault();
    this.openDialogColaborador('500ms', '250ms')
  }

  openDialogColaborador(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(UsuariosDialogComponent, {
      autoFocus: false,
      width: '800px',
      height: '63%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDialogUpdate(enterAnimationDuration: string, exitAnimationDuration: string, data: any): void {
    this.dialog.open(UsuarioDialogUpdateComponent, {
      width: '800px',
      height: '63%',
      enterAnimationDuration,
      exitAnimationDuration,
      data: data
    });
  }

  openDialogDelete(enterAnimationDuration: string, exitAnimationDuration: string, usuario: string): void {
    this.confirmacaoService.acao = "deletar";
    this.confirmacaoService.nome = usuario;
    this.dialog.open(ConfirmacaoComponent, {
      width: '80%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
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