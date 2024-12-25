import { NgModule } from '@angular/core';
import { UsuarioComponent } from 'src/app/components/pages/usuario/usuario.component';
import { SharedModule } from '../../shared/shared.module';
import { UsuarioDialogComponent } from 'src/app/components/pages/usuario/usuario-dialog/usuario-dialog.component';

@NgModule({
  declarations: [
    UsuarioComponent,
    UsuarioDialogComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    UsuarioComponent,
    UsuarioDialogComponent,
  ]
})
export class UsuariosModule { }
