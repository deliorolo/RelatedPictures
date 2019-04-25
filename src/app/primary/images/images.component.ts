import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../../core/data.service';
import { IImage } from '../../shared/interfaces';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor(private dataService: DataService) { }

  id: number;
  urls$: string[] = [];
  goodurl: string[] = [];
  j: number = 0;
  k: number = -1;


  ngOnInit() {

    for (let i = 0; i < 30; i++) {

      /*this.id = Math.floor(Math.random() * 8806) + 1;
      this.dataService.getImage(this.id)
        .subscribe((image: IImage) => this.urls$[i] = image.url)
        .add(() => { this.k++; this.MapValidUrls(); })*/

      this.id = Math.floor(Math.random() * 1085);
      
      this.urls$[i] = this.dataService.getImage(this.id)
        this.k++; 
        this.MapValidUrls(); 

        
    }

  }

  MapValidUrls() {
    if (!this.goodurl.includes(this.urls$[this.k])) {
      this.goodurl[this.j] = this.urls$[this.k];
      this.j++;
    }
  }

  /* MapValidUrls() {
 
     if (this.urls$[this.k].length > 1 && this.urls$[this.k].includes('jpg') && !this.goodurl.includes(this.urls$[this.k])) {
       this.goodurl[this.j] = this.urls$[this.k];
       this.j++;
     }
   }*/

}
