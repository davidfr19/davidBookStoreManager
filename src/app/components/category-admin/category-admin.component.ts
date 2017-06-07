import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Category} from './../../models/Category';

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin.component.html',
  styleUrls: ['./category-admin.component.css']
})
export class CategoryAdminComponent implements OnInit {

  @Output() sendCategory = new EventEmitter();

  categoryId =0;
  categoryName ="Enter category name";

  constructor() { }

  ngOnInit() {
  }

  onCategoryId(event) {
    this.categoryId = event.target.value;
  }

  onCategoryName(event) {
    this.categoryName = event.target.value;
  }

  onDone() {
    this.sendCategory.emit(new Category(this.categoryId, this.categoryName));
    this.categoryId = 0;
    this.categoryName='Enter category name';
  }



}
