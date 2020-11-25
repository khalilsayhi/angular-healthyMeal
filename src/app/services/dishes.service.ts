import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Dish} from '../model/dish';

@Injectable({
  providedIn: 'root'
})
export class DishesService {
  url = 'http://localhost:3000/dishes';
  constructor(private http: HttpClient) { }

  getDishes(): Observable<Dish[]>{
    return this.http.get<Dish[]>(this.url);
  }
  addDish(d: Dish){
    return this.http.post(this.url, d);
  }
  modifyDish(d: Dish){
    return this.http.put(this.url, d);
  }
  deleteDish(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
