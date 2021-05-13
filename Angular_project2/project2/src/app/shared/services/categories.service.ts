import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private kk:HttpClient) { }

  getcat(){
    let url="http://dev.localinfoz.com/api/categories/1"
    
      
    return this.kk.get(url);
    }
}
