import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError, filter } from 'rxjs/operators';

import { IImage } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl: string = 'http://www.splashbase.co/api/v1/images/';

  constructor(private http: HttpClient) { }

  getImage(id: number): Observable<IImage>{
    return this.http.get<IImage>(this.baseUrl + id)
        .pipe(
            catchError(this.handleError)
        );
}

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
        const errMessage = error.error.message;
        return Observable.throw(errMessage);
        // Use the following instead if using lite-server
        // return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || 'Node.js server error');
  }

}
