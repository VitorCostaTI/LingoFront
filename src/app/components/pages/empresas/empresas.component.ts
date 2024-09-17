import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpresasdialogComponent } from './empresas-dialog/empresas-dialog.component';
import { ConfirmacaoComponent } from '../../dialogs/confirmacao/confirmacao.component';
import { ConfirmacaoService } from 'src/app/modules/services/Confirmacao/confirmacao.service';
import { EmpresasUpdateDialogComponent } from './empresas-update-dialog/empresas-update-dialog.component';
import { Empresa_DATA } from 'src/Database/Empresa';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})

export class EmpresasComponent {

  isActive = false;

  constructor(
    public dialog: MatDialog,
    private confirmacaoService: ConfirmacaoService
  ) { }

  @HostListener('window:keydown.control.y', ['$event'])
  handleSave(event: KeyboardEvent){
    event.preventDefault();
    this.openDialogEmpresas('500ms', '250ms')
  }

  openDialogEmpresas(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(EmpresasdialogComponent, {
      minWidth: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDialogUpdateEmpresas(enterAnimationDuration: string, exitAnimationDuration: string, empresas: any): void {
    this.dialog.open(EmpresasUpdateDialogComponent, {
      minWidth: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
      data: empresas
    });
  }

  openDialogDelete(enterAnimationDuration: string, exitAnimationDuration: string, razao_social: string): void {
    this.confirmacaoService.acao = "deletar";
    this.confirmacaoService.nome = razao_social;
    this.dialog.open(ConfirmacaoComponent, {
      width: '80%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  displayedColumns: string[] = [
    'razao_social',
    'nome_fantasia',
    'cnpj',
    'representante',
    'contato',
    'acoes'
  ];

  dataSource = Empresa_DATA;
}
