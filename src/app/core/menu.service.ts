import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  constructor() { }

  private menuCallSource = new Subject<any>();
  private imagesListCallSource = new Subject<any>();

  menuCallSource$ = this.menuCallSource.asObservable();

  HideShowColors() {
    this.menuCallSource.next();
  }

  imagesListCallSource$ = this.imagesListCallSource.asObservable();

  SendDataPoints( data:any ) {
    this.imagesListCallSource.next ( data );   
  }

}
