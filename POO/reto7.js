
const { Person } = require("./Person.js");
let jaime=new Person(20,156,"europea","negro","femenino","española",1990);
let manolo=new Person(20,156,"europea","negro","femenino","española",1990);

class Contacts{


    constructor(){


        this.personas=[jaime,manolo];
    }


    printPersons(){

        for(let i=0 ; i<this.personas.length ; i++){

            console.log(this.personas[i]);
        }

    }
}

let Contacto1=new Contacts(jaime);

Contacto1.printPersons();