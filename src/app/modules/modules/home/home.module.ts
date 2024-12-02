import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ConfirmacaoComponent } from 'src/app/components/dialogs/confirmacao/confirmacao.component';
import { Error404Component } from 'src/app/components/error404/error404.component';
import { HomeComponent } from 'src/app/components/pages/home/home.component';
import { NavegacaoComponent } from 'src/app/components/navegacao/navegacao.component';
import { NotesComponent } from 'src/app/components/notes/notes.component';
import { NotificacoesComponent } from 'src/app/components/dialogs/notificacoes/notificacoes.component';

@NgModule({
  declarations: [
    ConfirmacaoComponent,
    Error404Component,
    HomeComponent,
    NavegacaoComponent,
    NotesComponent,
    NotificacoesComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ConfirmacaoComponent,
    Error404Component,
    HomeComponent,
    NavegacaoComponent,
    NotesComponent,
    NotificacoesComponent
  ]
})
export class HomeModule { }
