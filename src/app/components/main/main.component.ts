import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ConfiguracoesComponent } from '../dialog/configuracoes/configuracoes.component';
import { NotificacoesComponent } from '../dialog/notificacoes/notificacoes.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(public dialog: MatDialog) {}

  teste(){
    alert("teste botão");
    console.log("teste botão");
  }

  openDialogConfiguracoes(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ConfiguracoesComponent, {
      width: '750px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDialogNotificacoes(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(NotificacoesComponent, {
      width: '750px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
