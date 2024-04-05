import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PermissaoAcessoDialogComponent } from './permissao-acesso-dialog/permissao-acesso-dialog.component';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-permissao-acesso',
  templateUrl: './permissao-acesso.component.html',
  styleUrls: ['./permissao-acesso.component.scss']
})

export class PermissaoAcessoComponent {
  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  openDialogServicoAdicionar(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(PermissaoAcessoDialogComponent, {
      width: '750px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  autorizarSetor(): void {
    this._snackBar.open("Permissão salva com sucesso", "Fechar", {
      duration: 1500,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}