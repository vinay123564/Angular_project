import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../_services/categories.service';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {

   categoryArry:any
  constructor(private ll:CategoriesService) { }

  ngOnInit(): void {
  }

ss(){
  this.ll.sgetcategories().subscribe(
  (res:any)=>{
    this.categoryArry=res.data;
  },
  (err)=>{},
  )
}
}
