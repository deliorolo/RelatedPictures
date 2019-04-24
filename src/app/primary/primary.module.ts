import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimaryComponent } from './primary.component';
import { PrimaryRoutingModule } from './primary-routing.module';
import { TitleComponent } from './title/title.component';
import { MenuComponent } from './menu/menu.component';
import { ImagesModule } from './images/images.module';

@NgModule({
  declarations: [PrimaryComponent, TitleComponent, MenuComponent],
  imports: [
    CommonModule,
    PrimaryRoutingModule,
    ImagesModule
  ]
})
export class PrimaryModule { }
