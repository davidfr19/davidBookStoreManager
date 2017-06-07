import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { CategoryAdminComponent } from './components/category-admin/category-admin.component';
import { BookAdminComponent } from './components/book-admin/book-admin.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';
import { BookComponent } from './components/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryAdminComponent,
    BookAdminComponent,
    CategoriesComponent,
    CategoryComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
