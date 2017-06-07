import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Book} from './../../models/Book';
import {Category} from './../../models/Category';

@Component({
  selector: 'app-book-admin',
  templateUrl: './book-admin.component.html',
  styleUrls: ['./book-admin.component.css']
})
export class BookAdminComponent implements OnInit {

  @Output() sendBook = new EventEmitter();

  @Input() categories;

  bookId=0;
  bookName='Enter book name';
  author='Enter Author Name';
  bookCat='Enter book cathegory';
  category:Category;
  price =0;

  constructor() { }

  ngOnInit() {
  }



  onBookIdChange(event) {
    this.bookId = event.target.value;
  }

  onBookNameChange(event) {
    this.bookName = event.target.value;
  }

  onAuthorChange(event) {
    this.author = event.target.value;
  }

  onBookCatChange(event) {

    this.bookCat = event.target.value;
  }

  onPriceChange(event) {
    this.price = event.target.value;
  }

  onDone() {
    this.sendBook.emit(new Book(this.bookId, this.bookName, this.author, this.category, this.price));
    this.bookId = 0;
    this.bookName='Enter book name';
    this.author='Enter Author Name';
    this.bookCat='Enter book cathegory';
    this.price =0;
  }

}
