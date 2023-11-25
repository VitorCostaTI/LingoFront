import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PermissaoAcessoDialogComponent } from './permissao-acesso-dialog/permissao-acesso-dialog.component';

@Component({
  selector: 'app-permissao-acesso',
  templateUrl: './permissao-acesso.component.html',
  styleUrls: ['./permissao-acesso.component.scss']
})

export class PermissaoAcessoComponent {
  constructor(public dialog: MatDialog) {}

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  openDialogServicoAdicionar(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(PermissaoAcessoDialogComponent, {
      width: '750px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}