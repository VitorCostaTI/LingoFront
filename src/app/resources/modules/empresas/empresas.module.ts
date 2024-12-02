import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasComponent } from 'src/app/components/pages/empresas/empresas.component';
import { EmpresasdialogComponent } from 'src/app/components/pages/empresas/empresas-dialog/empresas-dialog.component';
import { SharedModule } from '../../shared/shared.module';
import { EmpresasUpdateDialogComponent } from 'src/app/components/pages/empresas/empresas-update-dialog/empresas-update-dialog.component';



@NgModule({
  declarations: [
    EmpresasComponent,
    EmpresasdialogComponent,
    EmpresasUpdateDialogComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    EmpresasComponent,
    EmpresasdialogComponent,
    EmpresasUpdateDialogComponent,
  ]
})
export class EmpresasModule { }
