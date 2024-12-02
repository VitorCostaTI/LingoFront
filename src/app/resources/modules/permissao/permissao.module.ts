import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissaoAcessoComponent } from 'src/app/components/pages/permissao-acesso/permissao-acesso.component';
import { PermissaoAcessoDialogComponent } from 'src/app/components/pages/permissao-acesso/permissao-acesso-dialog/permissao-acesso-dialog.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    PermissaoAcessoComponent,
    PermissaoAcessoDialogComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    PermissaoAcessoComponent,
    PermissaoAcessoDialogComponent,
  ]
})
export class PermissaoModule { }
