import {Category} from './Category';
export class Book {

    private bookId: number;
    private bookName: string;
    private author: string;
    private bookCat: Category;
    private price: number;

    constructor(bookId: number, bookName:string, author:string, bookCat:Category, price: number) {
        this.setBookId(bookId);
        this.setBookName(bookName);
        this.setAuthor(author);
        this.setBookCat(bookCat);
        this.setPrice(price);
    }

    getBookId() { return this.bookId; }
    getBookName() { return this.bookName; }
    getAuthor() { return this.author; }
    getBookCat() { return this.bookCat; }
    getPrice() { return this.price; }

    setBookId(value) { this.bookId = value; }
    setBookName(value) { this.bookName = value; }
    setAuthor(value) { this.author = value; }
    setBookCat(value:Category) { this.bookCat = value; }
    setPrice(value) { this.price = value; }
}