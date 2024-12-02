import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Clipboard } from '@angular/cdk/clipboard';
import { NotificacoesComponent } from '../../dialogs/notificacoes/notificacoes.component';
import { NotesComponent } from '../../dialogs/notes/notes.component';
import { TemplateCrudService } from 'src/app/resources/services/Template/template-crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'frontLingo';

  constructor(
    public clipboard: Clipboard,
    public dialog: MatDialog,
    public templateService: TemplateCrudService
  ) { }

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

  copyLinkedln() {
    const link = 'https://www.linkedin.com/in/vitor-costa-10566b22a/'
    this.clipboard.copy(link)
    this.templateService.snackBarSuccess('Link copiado com sucesso', '')
  }
}
