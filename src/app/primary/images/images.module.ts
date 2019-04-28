import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesComponent } from './images.component';
import { ImagesListComponent } from './images-list/images-list.component';
import { ImagesRoutingModule } from './images-routing.module';


@NgModule({
  declarations: [ImagesComponent, ImagesListComponent],
  imports: [
    CommonModule,
    ImagesRoutingModule
  ],
  exports: [ImagesComponent]
})
export class ImagesModule { }
