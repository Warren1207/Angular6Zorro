import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class LayoutService {
    private subject = new Subject<any>();

    constructor() { }

    setSide(isCollapsed: boolean) {
      this.subject.next({isCollapsed : isCollapsed});
    }

    getSide(): Observable<any> {
      return this.subject.asObservable();
    }
}
