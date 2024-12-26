import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Automacao } from 'src/app/resources/model/Automacao';
import { ConfirmacaoService } from 'src/app/resources/services/Confirmacao/confirmacao.service';
import { Automacao_DATA } from 'src/database/Automacao';
import { AutomacoesDialogComponent } from '../automacoes-dialog/automacoes-dialog.component';
import { ConfirmacaoComponent } from 'src/app/components/dialogs/confirmacao/confirmacao.component';

@Component({
  selector: 'app-automacao-dispositivos',
  templateUrl: './automacao-dispositivos.component.html',
  styleUrls: ['./automacao-dispositivos.component.scss']
})
export class AutomacaoDispositivosComponent {
  isLoading: boolean = false;

  dataSource = new MatTableDataSource<Automacao>(Automacao_DATA);

  constructor(
    private dialog: MatDialog,
    private confirmacaoService: ConfirmacaoService,
  ) { }

  ngOnInit(): void {
    this.reload();
  }

  @ViewChild(MatSort) sort!: MatSort
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  reload(): void {
    setTimeout(() => {
      this.isLoading = true
      window.location.reload()
    }, 15000)
  }

  reconect(): void {
    this.isLoading = true
    setTimeout(() => {
      window.location.reload()
    }, 3000)
  }

  openDialogUpdate(enterAnimationDuration: string, exitAnimationDuration: string, data: any): void {
    this.dialog.open(AutomacoesDialogComponent, {
      autoFocus: false,
      width: '80%',
      enterAnimationDuration,
      exitAnimationDuration,
      data: data
    });
  }

  openDialogDelete(enterAnimationDuration: string, exitAnimationDuration: string, nome: string): void {
    this.confirmacaoService.acao = "desconectar";
    this.confirmacaoService.nome = nome;
    this.dialog.open(ConfirmacaoComponent, {
      width: '80%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  displayedColumns: string[] = [
    'status',
    'ip',
    'dispositivo',
    'firmware',
    'porta',
    'manutencao',
    'acoes'
  ];
}
