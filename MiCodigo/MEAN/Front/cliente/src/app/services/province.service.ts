import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Province } from '../models/province';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
  urlProvince ='http://localhost:4000/api/tasks/provinces/'

  constructor(private http:HttpClient) { }

  getProvinces():Observable<any>{
    return this.http.get(this.urlProvince);
  }
  addProvince(province:Province):Observable<any>{
    return this.http.post(this.urlProvince, province);
  }
}
