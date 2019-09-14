import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule
  ],
  exports: [
      MatButtonModule,
  ],

  providers: [],
})
export class MaterialModule { }
