import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { OrdemServicoDialogAddComponent } from './ordem-servico-dialog-add/ordem-servico-dialog-add.component';
import { OrdemServicoDialogUpdateComponent } from './ordem-servico-dialog-update/ordem-servico-dialog-update.component';
import { OrdemServicoDialogRelatorioComponent } from './ordem-servico-dialog-relatorio/ordem-servico-dialog-relatorio.component';
import { OrdemServicoDialogFinishComponent } from './ordem-servico-dialog-finish/ordem-servico-dialog-finish.component';

@Component({
  selector: 'app-ordem-servico',
  templateUrl: './ordem-servico.component.html',
  styleUrls: ['./ordem-servico.component.scss']
})
export class OrdemServicoComponent {
  constructor(public dialog: MatDialog) {}

  openDialogServicoAdicionar(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(OrdemServicoDialogAddComponent, {
      width: '750px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDialogServicoAtualizar(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(OrdemServicoDialogUpdateComponent, {
      width: '750px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDialogServicoRelatorio(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(OrdemServicoDialogRelatorioComponent, {
      width: '750px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDialogServicoFinish(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(OrdemServicoDialogFinishComponent, {
      width: '750px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
