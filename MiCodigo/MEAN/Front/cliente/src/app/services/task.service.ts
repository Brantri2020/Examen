import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  http: any;

  constructor() { }
  getTasks():Observable<any>{
    return this.http.get();
  }
}
