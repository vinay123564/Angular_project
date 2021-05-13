import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoint } from 'src/app/utilis/Endpoint';

@Injectable({
  providedIn: 'root'
})
export class SingleBussinessService {

  constructor(private single:HttpClient) { }

  singlebussiness(listing_Id:any){
    let url=Endpoint.SIGLEBUSSINESS+"/"+listing_Id;
return this.single.get(url);
  }
}

