import { Component, OnInit } from '@angular/core';
import { CateroryService } from '../../_services/caterory.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {
  categorylist:any;
  constructor(private ll:CateroryService) { }

  ngOnInit(): void {
    this.getcategory();
  }

  getcategory(){
    this.ll.sCategories().subscribe(
      (res:any)=>{
        console.log(res.data);
        this.categorylist=res.data;
      },
      (err)=>{},
    )
  }
}
