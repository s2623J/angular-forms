import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { SandoAppComponent } from './sando-app.component';
import { OrderSheetComponent } from './counter/order-sheet/order-sheet.component';
import { DebugPanelComponent } from './counter/debug-panel/debug-panel.component';
// import { CustomValidators } from './counter/shared/custom-validators';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    SandoAppComponent,
    OrderSheetComponent,
    DebugPanelComponent
		// CustomValidators
  ],
  bootstrap: [
    SandoAppComponent
  ]
})
export class AppModule { }
