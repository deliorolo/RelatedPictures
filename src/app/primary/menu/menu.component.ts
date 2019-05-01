import { Component, OnInit } from '@angular/core';

import { MenuService } from '../../core/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  buttonText: string = "Show Colors";
  showFrames: boolean = false;
  blueLeft: number;
  greenLeft: number;
  actualPlayer: string;
  redSelected: boolean;

  constructor(private menuService: MenuService, public router: Router) { }

  ngOnInit() {

    this.menuService.imagesListCall$.subscribe(
      (data) => {
        this.blueLeft = data[0];
        this.greenLeft = data[1];

        if (data[2] == 1) {
          this.redSelected = true;
        }
        else {
          this.redSelected = false;
        }

        if (data[3] == 0) {
          this.actualPlayer = "Blue";
        }
        else if (data[3] == 1) {
          this.actualPlayer = "Green";
        }
      }
    )
  }

  toggle() {
    this.showFrames = !this.showFrames;
    if (this.showFrames) {
      this.buttonText = "Hide Colors";
      this.menuService.HideShowColors();
    }
    else {
      this.buttonText = "Show Colors";
      this.menuService.HideShowColors();
    }
  }

resetButtons(){
  this.buttonText = "Show Colors";
  this.showFrames = false;
}

}
