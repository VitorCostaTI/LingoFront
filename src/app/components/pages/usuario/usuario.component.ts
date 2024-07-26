import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsuariosDialogComponent } from './usuarios-dialog/usuarios-dialog.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmacaoComponent } from '../../dialogs/confirmacao/confirmacao.component';
import { ConfirmacaoService } from 'src/app/modules/services/Confirmacao/confirmacao.service';
import { UsuarioDialogUpdateComponent } from './usuario-dialog-update/usuario-dialog-update.component';
import { Colaborador_DATA } from 'src/Database/Colaborador';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})

export class UsuarioComponent {

  cadastroUsuario: FormGroup;
  isActive = false;

  constructor(public dialog: MatDialog, private fb: FormBuilder, private confirmacaoService: ConfirmacaoService) {
    this.cadastroUsuario = this.fb.group({
      nome: []
    })
  }

  openDialogColaborador(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(UsuariosDialogComponent, {
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

  dataSource = Colaborador_DATA;
}