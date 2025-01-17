import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Clipboard } from '@angular/cdk/clipboard';
import { NotificacoesComponent } from '../../dialogs/notificacoes/notificacoes.component';
import { TemplateCrudService } from 'src/app/resources/services/Template/template-crud.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    public clipboard: Clipboard,
    public dialog: MatDialog,
    public templateService: TemplateCrudService
  ) { }

  private _bottomSheet = inject(MatBottomSheet);

  openBottomSheet(): void {
    this._bottomSheet.open(NotificacoesComponent);
  }

  copyLinkedln() {
    const link = 'https://www.linkedin.com/in/vitor-costa-10566b22a/'
    this.clipboard.copy(link)
    this.templateService.snackBarSuccess('Link copiado com sucesso', '')
  }
}
