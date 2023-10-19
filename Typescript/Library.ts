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

        

        for (let i = 0; i < this.books.length; i++){
            if(i+1 <= this.books.length){

                console.log(`book  ${i+1}`)
                this.books[i].toString();

            }
        }
        
    }


    public getNumberOfBooks():number{

        let nLibros =this.books.length;


        return nLibros ;
    }

    public findByAuthor(author:string):Book[]{

        let libros:Book[]=[];
            for(let i=0 ; i<this.books.length ; i ++ ){ // bucle para recorrer todos los libros 

                if(this.books[i].getAuthor()===author){ // si el libro qu eestamos recorriendo tiene el mismo autor que el parametro , lo añadimos a la variable que hemos creado 

                    libros.push(this.books[i]);
                }


                
            }

            return libros ;


        
    }

}


