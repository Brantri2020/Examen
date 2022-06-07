import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  urlCity ='http://localhost:4000/api/tasks/cities/'

  constructor(private http:HttpClient) { }

  getCities():Observable<any>{
    return this.http.get(this.urlCity);
  }
  addCity(city:City):Observable<any>{
    return this.http.post(this.urlCity, city);
  }
  getCity(nameProvince:string):Observable<any>{
    return this.http.get(this.urlCity+nameProvince);
  }
}
