import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private kk:HttpClient) { }
  getout(){
  const url= "http://dev.localinfoz.com/api/categories/1";

return this.kk.get(url);
  

  }

}
