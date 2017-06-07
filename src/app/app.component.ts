import { Component } from '@angular/core';
import { Category } from './models/Category';
import { Book } from './models/Book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  categories = [new Category(1,'infantil'),new Category(2,'drama'),new Category(3,'novela')];

   books = [
   new Book(1, 'Cocori','Juan Perez', this.categories[0], 5000 ),
   new Book(2, 'Lo que el viento se llevó','María Lopez', this.categories[1], 7000 ),
   new Book(3, 'Unica mirando al mar','Sofia Ruiz', this.categories[2], 8000 )];

  

  receivedBook(event) {
    for(var i = 0; i < this.categories.length; i ++) {
      if(this.categories[i].getCategoryName() === event.getBookCat()) {
        this.categories[i].getBooks().push(event);
      }
    }
  }

  receivedCategory(event) {
    this.categories.push(event);
  }
  
  

}
