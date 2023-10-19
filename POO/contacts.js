const { Person } = require("./Person.js");
let jaime=new Person(20,156,"europea","negro","femenino","española",1990);
let manolo=new Person(20,156,"europea","negro","femenino","española",1990);

 

class Contacts{

    

    constructor(){

        this.persons=[];

        
    }


    printPersons(){

       

            console.log(this.persons);
        }
s
    }


module.exports={Contacts};