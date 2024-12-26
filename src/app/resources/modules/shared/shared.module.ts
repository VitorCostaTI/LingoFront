import { NgModule } from '@angular/core';

import { CdkTreeModule } from '@angular/cdk/tree';
import { PortalModule } from '@angular/cdk/portal';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { materialModules } from 'src/style/material/material';
import { NgxMaskModule } from 'ngx-mask';

const cdkModules = [
  CdkTreeModule,
  PortalModule
]

@NgModule({
  imports: [
    AppRoutingModule,
    AsyncPipe,
    CommonModule,
    CurrencyMaskModule,
    FormsModule,
    NgFor,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,

    cdkModules,
    FlexLayoutModule,
    materialModules
  ],
  exports: [
    cdkModules,
    CommonModule,
    CurrencyMaskModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    materialModules
  ],
})

export class SharedModule { }