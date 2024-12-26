import { NgModule } from '@angular/core';
import { EstoqueComponent } from 'src/app/components/pages/estoque/estoque.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    EstoqueComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    EstoqueComponent
  ]
})
export class EstoqueModule { }
