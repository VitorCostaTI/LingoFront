import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ConfiguracoesComponent } from './components/dashboard/dialog/configuracoes/configuracoes.component';
import { NotificacoesComponent } from './components/dashboard/dialog/notificacoes/notificacoes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}

  title = 'frontLingo';

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
