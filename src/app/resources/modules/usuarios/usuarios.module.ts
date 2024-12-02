import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from 'src/app/components/pages/usuario/usuario.component';
import { UsuariosDialogComponent } from 'src/app/components/pages/usuario/usuarios-dialog/usuarios-dialog.component';
import { SharedModule } from '../../shared/shared.module';
import { UsuarioDialogUpdateComponent } from 'src/app/components/pages/usuario/usuario-dialog-update/usuario-dialog-update.component';

@NgModule({
  declarations: [
    UsuarioComponent,
    UsuariosDialogComponent,
    UsuarioDialogUpdateComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    UsuarioComponent,
    UsuariosDialogComponent,
    UsuarioDialogUpdateComponent,
  ]
})
export class UsuariosModule { }
