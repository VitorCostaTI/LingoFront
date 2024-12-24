import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PermissaoAcessoDialogComponent } from './permissao-acesso-dialog/permissao-acesso-dialog.component';
import { TemplateCrudService } from 'src/app/resources/services/Template/template-crud.service';

@Component({
  selector: 'app-permissao-acesso',
  templateUrl: './permissao-acesso.component.html',
  styleUrls: ['./permissao-acesso.component.scss']
})

export class PermissaoAcessoComponent {
  constructor(public dialog: MatDialog, private templateService: TemplateCrudService) { }

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  openDialogServicoAdicionar(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(PermissaoAcessoDialogComponent, {
      autoFocus: false,
      width: '750px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  autorizarSetor(): void {
    this.templateService.snackBarSuccess("Permissão atualizada com sucesso!!", "")
  }
}