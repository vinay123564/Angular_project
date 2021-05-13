import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private ll:CategoryService) { }
array:any;
  ngOnInit(): void {
    this.getin()
  }
getin(){
  this.ll.getout().subscribe(
    (res:any)=>{
      this.array=res.data;
    },
    (res)=>{}
  )
}

}
