import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfiguracoesComponent } from '../../dialogs/configuracoes/configuracoes.component';
import { NotificacoesComponent } from '../../dialogs/notificacoes/notificacoes.component';
import { NotesComponent } from '../../notes/notes.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public dialog: MatDialog) { }

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

  openNotesDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(NotesComponent, {
      width: '750px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
