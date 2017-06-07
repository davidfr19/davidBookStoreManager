import {Book} from './Book';
export class Category {
    private categoryId:number;
    private categoryName: string;
    private books:Book[]=[];

    constructor(categoryId:number, categoryName:string ) {
        this.setCategoryId(categoryId);
        this.setCategoryName(categoryName);
    }

    getCategoryId() { return this.categoryId; }
    getCategoryName() { return this.categoryName; }
    getBooks() {return this.books}


    setCategoryId(value) { this.categoryId = value; }
    setCategoryName(value) { this.categoryName = value; }
}