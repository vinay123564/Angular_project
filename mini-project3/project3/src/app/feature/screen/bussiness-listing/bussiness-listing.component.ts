import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 import { BussinessListingService } from '../../_services/bussiness-listing.service';

@Component({
  selector: 'app-bussiness-listing',
  templateUrl: './bussiness-listing.component.html',
  styleUrls: ['./bussiness-listing.component.css']
})
export class BussinessListingComponent implements OnInit {
bussinesslist:any;
  constructor(private _activated:ActivatedRoute,
    private bussinesslists:BussinessListingService
  ) { }
  
  ngOnInit(): void {
 
    let m = this._activated.snapshot;
    console.log(m.params.categoryId);
    this.getbussiness(m.params.categoryId)
  }

  
getbussiness(categoryId:any){
 this.bussinesslists.bussiness(categoryId).subscribe(
   (res:any)=>{
     console.log(res.data)
     this.bussinesslist=res.data
   },
   (err)=>{}
 )
}
}
