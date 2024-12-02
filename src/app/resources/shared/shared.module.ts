import { NgModule } from '@angular/core';


import { CdkTreeModule } from '@angular/cdk/tree';
import { PortalModule } from '@angular/cdk/portal';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { materialModules } from 'src/Style/material/material';
import { AppRoutingModule } from 'src/app/app-routing.module';

const cdkModules = [
  CdkTreeModule,
  PortalModule
]

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    AsyncPipe,
    FormsModule,
    NgFor,
    CurrencyMaskModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),

    cdkModules,
    FlexLayoutModule,
    materialModules
  ],
  exports: [
    CurrencyMaskModule,
    CommonModule,
    cdkModules,
    FlexLayoutModule,
    ReactiveFormsModule,
    materialModules
  ],
})

export class SharedModule {
}