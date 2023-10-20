import { Book } from "./book";

import { Library } from "./Library";

let libro1=new Book("java" , 258 ,"156d6f5sd6f" , "jaime moreno " , " la que me da la gana ");

let libro2=new Book("java" , 258 ,"156d6f5sd6f" , "jaime moreno " , " la que me da la gana ");


let library1= new Library([libro1,libro2], "jaen" , "adolfo");

library1.tofuncione();


