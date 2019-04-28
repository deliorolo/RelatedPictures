import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { PrimaryComponent } from './primary.component';
import { PrimaryRoutingModule } from './primary-routing.module';
import { TitleComponent } from './title/title.component';
import { MenuComponent } from './menu/menu.component';
import { ImagesModule } from './images/images.module';
import { CoreModule } from '../core/core.module';
import { InfoModule } from './info/info.module';

@NgModule({
  declarations: [PrimaryComponent, TitleComponent, MenuComponent],
  imports: [
    CommonModule,
    PrimaryRoutingModule,
    ImagesModule,
    BrowserModule,
    CoreModule,
    InfoModule
  ],
  exports: [PrimaryComponent]

})

export class PrimaryModule { }
