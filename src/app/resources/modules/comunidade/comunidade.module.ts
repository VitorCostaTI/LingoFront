import { NgModule } from '@angular/core';
import { ComunidadeComponent } from 'src/app/components/pages/comunidade/comunidade.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ComunidadeComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ComunidadeComponent
  ]
})
export class ComunidadeModule { }
