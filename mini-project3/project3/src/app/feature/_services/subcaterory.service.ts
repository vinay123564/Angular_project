import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoint } from 'src/app/utilis/Endpoint';
@Injectable({
  providedIn: 'root'
})
export class SubcateroryService {

  
  constructor(private kk:HttpClient) { }

  subCategories(categoryId:any){
    let url =Endpoint.SUBCATEGORIES+"/"+categoryId;
  return this.kk.get(url)
  }
  
}
