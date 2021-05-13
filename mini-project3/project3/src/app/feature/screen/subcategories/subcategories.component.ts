import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubcateroryService } from '../../_services/subcaterory.service';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.css']
})
export class SubcategoriesComponent implements OnInit {
  subcategorylist: any=[];

 
  constructor(private _activatedRoute: ActivatedRoute,
    private _subcategoryService: SubcateroryService) { }

  ngOnInit(): void {

    let p = this._activatedRoute.snapshot;
    console.log(p.params.categoryId);
    this.getsubcategories(p.params.categoryId)
  }

  getsubcategories(categoryId:any) {
    this._subcategoryService.subCategories(categoryId).subscribe(
      (res: any) => {
        console.log(res.data);
        this.subcategorylist = res.data;
      },
      (err) => {},
    )
  }



}
