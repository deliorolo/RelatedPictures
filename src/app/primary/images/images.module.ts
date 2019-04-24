import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesComponent } from './images.component';
import { ImagesListComponent } from './images-list/images-list.component';

@NgModule({
  declarations: [ImagesComponent, ImagesListComponent],
  imports: [
    CommonModule
  ],
  exports: [ImagesComponent]
})
export class ImagesModule { }
