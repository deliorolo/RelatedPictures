import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrimaryModule } from './primary/primary.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PrimaryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
