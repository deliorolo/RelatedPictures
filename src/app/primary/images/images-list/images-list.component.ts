import { Component, OnInit, Input } from '@angular/core';

import { MenuService } from '../../../core/menu.service';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.css']
})
export class ImagesListComponent implements OnInit {

  links: string[] = [];
  frames: string[] = [];
  framesSaved: string[] = [];
  clickedImages: boolean[] = [];
  colorsShown: boolean = false;

  // [0] - number of blue
  // [1] - number of green
  // [2] - red selected
  // [3] - player (0 - blue ; 1 - green)
  data: number[] = [];

  @Input()
  set images(value: string[]) {
    if (value) {
      this.links = value;
    }
  }

  constructor(private menuService: MenuService) { }

  ngOnInit() {

    for (let i = 0; i < 20; i++){
      this.clickedImages[i] = false;
    }

    this.resetShownItems();
    this.createRandomCode();
    this.menuService.SendDataPoints(this.data);

    this.menuService.menuCallSource$.subscribe(
      () => {
            if (this.colorsShown){
              this.resetShownItems();
            }
            else{
              this.setShownItems();
            }
      }
    )
  }
  
  resetShownItems(){
   
    for (let i = 0; i < 20; i++){
      if(!this.clickedImages[i]){
        this.frames[i] = "";
      }     
    }
    this.colorsShown = false;
  }

  setShownItems(){

    for (let i = 0; i < 20; i++){  
        this.frames[i] = this.framesSaved[i];
    }
    this.colorsShown = true;
  }

  setToClicked(index: number){

    if(this.data[2] != 1 && this.data[0] > 0 && this.data[1] > 0 && !this.colorsShown){
    
    this.clickedImages[index] = true;
    this.frames[index] = this.framesSaved[index];

    if(this.frames[index] == "frameBlue"){
      this.data[0]--;
      if (this.data[3] == 1){
        this.data[3] = 0;
      }
    }
    else if(this.frames[index] == "frameGreen"){
      this.data[1]--;
      if (this.data[3] == 0){
        this.data[3] = 1;
      }
    }
    else if(this.frames[index] == "frameRed"){
      this.data[2] = 1;
    }
    else if(this.frames[index] == "frameYellow"){
      if (this.data[3] == 1){
        this.data[3] = 0;
      }
      else{
        this.data[3] = 1;
      }
    }

    this.menuService.SendDataPoints(this.data);
  }
  }

  createRandomCode(){

    var aux = 0;
    var j = 0;

    aux = Math.floor(Math.random() * 2);

    if(aux == 1){
      this.data[0] = 8;
      this.data[1] = 7;
      this.data[3] = 0;
    }
    else{
      this.data[0] = 7;
      this.data[1] = 8;
      this.data[3] = 1;
    }

    aux = Math.floor(Math.random() * 20);
    this.framesSaved[aux] = "frameRed"

    while (j < 4){
      aux = Math.floor(Math.random() * 20);
      if(!this.framesSaved[aux]){
        this.framesSaved[aux] = "frameYellow";
        j++;
      }
    }

    j=0;

    while (j < this.data[0]){
      aux = Math.floor(Math.random() * 20);
      if(!this.framesSaved[aux]){
        this.framesSaved[aux] = "frameBlue";
        j++;
      }
    }

    for (let i = 0; i < 20; i++){
      if(!this.framesSaved[i]){
        this.framesSaved[i] = "frameGreen";
      }
    }

  }

}
