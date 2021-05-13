import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoint } from 'src/app/utilis/Endpoint';

@Injectable({
  providedIn: 'root'
})
export class BussinessListingService {

  constructor(private bussinesslist:HttpClient) { }

  bussiness(categoryId:any){

    let url=Endpoint.BUSSINESSLISTG+"/"+categoryId;
    return this.bussinesslist.get(url)
  }


}
