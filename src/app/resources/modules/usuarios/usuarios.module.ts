import { NgModule } from '@angular/core';
import { UsuarioComponent } from 'src/app/components/pages/usuario/usuario.component';
import { SharedModule } from '../shared/shared.module';
import { UsuarioDialogComponent } from 'src/app/components/pages/usuario/usuario-dialog/usuario-dialog.component';
import { ProfileUserComponent } from 'src/app/components/pages/usuario/profile-user/profile-user.component';
import { NotesComponent } from 'src/app/components/pages/usuario/notes/notes.component';

@NgModule({
  declarations: [
    NotesComponent,
    UsuarioComponent,
    UsuarioDialogComponent,
    ProfileUserComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    NotesComponent,
    UsuarioComponent,
    UsuarioDialogComponent,
    ProfileUserComponent
  ]
})
export class UsuariosModule { }
