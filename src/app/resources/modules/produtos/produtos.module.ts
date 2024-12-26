import { NgModule } from '@angular/core';
import { ProdutosComponent } from 'src/app/components/pages/produtos/produtos.component';
import { SharedModule } from '../../shared/shared.module';
import { ProdutosDialogComponent } from 'src/app/components/pages/produtos/produtos-dialog/produtos-dialog.component';

@NgModule({
  declarations: [
    ProdutosComponent,
    ProdutosDialogComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ProdutosComponent,
    ProdutosDialogComponent,
  ]
})
export class ProdutosModule { }
