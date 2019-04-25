import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  constructor() { }

  private menuCall = new Subject<any>();
  private imagesListCall = new Subject<any>();

  menuCall$ = this.menuCall.asObservable();

  HideShowColors() {
    this.menuCall.next();
  }

  imagesListCall$ = this.imagesListCall.asObservable();

  SendDataPoints( data:any ) {
    this.imagesListCall.next ( data );   
  }

}
