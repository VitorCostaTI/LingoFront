import { NgModule }                 from '@angular/core';

import { MatAutocompleteModule }    from '@angular/material/autocomplete';
import { MatButtonModule }          from '@angular/material/button';
import { MatButtonToggleModule }    from '@angular/material/button-toggle';
import { MatCardModule }            from '@angular/material/card';
import { MatCheckboxModule }        from '@angular/material/checkbox';
import { MatChipsModule }           from '@angular/material/chips';
import { MatDatepickerModule }      from '@angular/material/datepicker';
import { MatDialogModule }          from '@angular/material/dialog';
import { MatDividerModule }         from '@angular/material/divider';
import { MatExpansionModule }       from '@angular/material/expansion';
import { MatFormFieldModule }       from '@angular/material/form-field';
import { MatIconModule }            from '@angular/material/icon';
import { MatInputModule }           from '@angular/material/input';
import { MatListModule }            from '@angular/material/list';
import { MatMenuModule }            from '@angular/material/menu';
import { OverlayModule }            from '@angular/cdk/overlay';
import { MatPaginatorModule }       from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRippleModule }          from '@angular/material/core';
import { MatSelectModule }          from '@angular/material/select';
import { MatSidenavModule }         from '@angular/material/sidenav';
import { MatSnackBarModule }        from '@angular/material/snack-bar';
import { MatSortModule }            from '@angular/material/sort';
import {MatStepperModule}           from '@angular/material/stepper';
import { MatTableModule }           from '@angular/material/table';
import { MatTabsModule }            from '@angular/material/tabs';
import { MatToolbarModule }         from '@angular/material/toolbar';
import { MatTreeModule }            from '@angular/material/tree';

import { CdkTreeModule } from '@angular/cdk/tree';
import { PortalModule }  from '@angular/cdk/portal';

import { FlexLayoutModule }                 from '@angular/flex-layout';
import { MatTooltip, MatTooltipModule }     from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe, NgFor }                 from '@angular/common';

const materialModules = [
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatFormFieldModule,
  MatButtonToggleModule,
  MatTreeModule,
  OverlayModule,
];

const cdkModules = [
  CdkTreeModule,
  PortalModule

]

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    AsyncPipe,

    cdkModules,
    FlexLayoutModule,
    materialModules
  ],
  exports: [
    cdkModules,
    FlexLayoutModule,
    materialModules
  ],
})
export class SharedModule {
}