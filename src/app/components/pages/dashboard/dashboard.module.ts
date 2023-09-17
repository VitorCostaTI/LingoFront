import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  declarations: [SharedModule],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DashboardModule { }
