import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ConfirmacaoComponent } from 'src/app/components/dialogs/confirmacao/confirmacao.component';
import { Error404Component } from 'src/app/components/add-on/error404/error404.component';
import { NotificacoesComponent } from 'src/app/components/dialogs/notificacoes/notificacoes.component';

@NgModule({
  declarations: [
    ConfirmacaoComponent,
    Error404Component,
    NotificacoesComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ConfirmacaoComponent,
    Error404Component,
    NotificacoesComponent
  ]
})
export class HomeModule { }
