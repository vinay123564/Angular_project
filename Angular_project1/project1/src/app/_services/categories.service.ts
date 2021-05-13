import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }

  sgetcategories(){
    let url="http://dev.localinfoz.com/api/categories/1"
    return this.http.get(url);
  }

}
