import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppService {
  couterArray: number[] = [1, 2, 3, 4, 5];

  onChange(): Observable<number[]> {
    return Observable.create((observer: any) => {
      observer.next(this.couterArray);
    });
  }
}
