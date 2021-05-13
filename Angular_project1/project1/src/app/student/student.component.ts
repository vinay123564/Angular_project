import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../_services/categories.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  title="project";
  name="kumar"

  categoriesArr:any;


  constructor(private categories:CategoriesService) { }

  ngOnInit(){
    this.getCategories();
  }

getCategories(){
  this.categories.sgetcategories().subscribe(
    (res:any)=>{
      this.categoriesArr=res.data;
      console.log(this.categoriesArr)
    },
    (err)=>{},
  )
}
}
