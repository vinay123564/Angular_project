import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoint } from 'src/app/utilis/Endpoint';
// import { Endpoint }  from 'src/app/utilis/Endpoint';


@Injectable({
  providedIn: 'root'
})
export class CateroryService {

  constructor(private kk:HttpClient) { }

  sCategories(){
    const url =Endpoint.CATEGORIES;
  return this. kk.get(url)
  }

}
