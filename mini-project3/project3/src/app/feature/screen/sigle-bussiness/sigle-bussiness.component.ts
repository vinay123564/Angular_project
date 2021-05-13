import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SingleBussinessService} from'../../_services/single-bussiness.service';
@Component({
  selector: 'app-sigle-bussiness',
  templateUrl: './sigle-bussiness.component.html',
  styleUrls: ['./sigle-bussiness.component.css']
})
export class SigleBussinessComponent implements OnInit {
  singlebusines:any;
  constructor(private _activatedrout:ActivatedRoute,
    private lm:SingleBussinessService
    
   ) { }

  ngOnInit(): void {

    let k=this._activatedrout.snapshot;
    console.log(k)

      this.getsingle(k.params.listingId)
  }

  getsingle(listingId:any){
    this.lm.singlebussiness(listingId).subscribe(
      (res:any)=>{
      console.log(res.data)
this.singlebusines=res.data;

      },
      (err:any)=>{} 
      )
  }
}
