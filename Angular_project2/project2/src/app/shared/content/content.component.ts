import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  categoryArr:any;

  constructor(private jk:CategoriesService) { }

  ngOnInit(): void {
this.set();

  }
set(){
  this.jk.getcat().subscribe(
    (res:any)=>{
this.categoryArr=res.data
    },
    (err)=>{}
  )
}

}
