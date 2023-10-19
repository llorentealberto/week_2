import { Book } from "./book";



 export class Library{

    private books:Book[];
    private address:string;
    private manager:string;

    


    constructor(books:Book[] , address:string ,manager:string){


        this.books=books;
        this.address= address;
        this.manager=manager;
    }
    

    public getAddress(): string {
        return this.address;
    }

    public setAddress(address: string): void {
        this.address = address;
    }

    public getManager(): string {
        return this.manager;
    }

    public setManager(manager: string): void {
        this.manager = manager;
    }

    public tofuncione():void{


        for(let book of this.books){
            console.log("book  " + this.books.indexOf(book) +   book.toString());
            
        }
    }

}


