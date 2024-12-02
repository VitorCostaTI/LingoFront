import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from 'src/app/components/pages/produtos/produtos.component';
import { ProdutosDialogComponent } from 'src/app/components/pages/produtos/produtos-dialog/produtos-dialog.component';
import { ProdutosUpdateDialogComponent } from 'src/app/components/pages/produtos/produtos-update-dialog/produtos-update-dialog.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ProdutosComponent,
    ProdutosDialogComponent,
    ProdutosUpdateDialogComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ProdutosComponent,
    ProdutosDialogComponent,
    ProdutosUpdateDialogComponent,
  ]
})
export class ProdutosModule { }
