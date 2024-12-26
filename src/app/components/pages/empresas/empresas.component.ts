import { Component, HostListener, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacaoComponent } from '../../dialogs/confirmacao/confirmacao.component';
import { ConfirmacaoService } from 'src/app/resources/services/Confirmacao/confirmacao.service';
import { Empresa_DATA } from 'src/database/Empresa';
import { MatTableDataSource } from '@angular/material/table';
import { Empresa } from 'src/app/resources/model/Empresa';
import { MatSort } from '@angular/material/sort';
import { EmpresasDialogComponent } from './empresas-dialog/empresas-dialog.component';

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

  dataSource = new MatTableDataSource<Empresa>(Empresa_DATA);

  @ViewChild(MatSort) sort!: MatSort
  ngAfterViewInit(): void{
    this.dataSource.sort = this.sort
  }

  @HostListener('window:keydown.control.y', ['$event'])
  handleSave(event: KeyboardEvent){
    event.preventDefault();
    this.openDialogEmpresas('500ms', '250ms')
  }

  openDialogEmpresas(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(EmpresasDialogComponent, {
      autoFocus: false,
      minWidth: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
      data: []
    });
  }

  openDialogUpdateEmpresas(enterAnimationDuration: string, exitAnimationDuration: string, data: any): void {
    this.dialog.open(EmpresasDialogComponent, {
      autoFocus: false,
      minWidth: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
      data: data
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
}
