let {Contacts} =require("./contacts.js");
let {Person} =require("./Person.js");

let jaime=new Person(20,156,"europea","negro","femenino","española",1990,["correr" ,"beber", "salir","trabajar"]);
let manolo=new Person(20,156,"europea","negro","femenino","española",1990 ,["correr" ,"beber", "salir","trabajar"]);



let contacto1= new Contacts();

contacto1.persons.push(jaime , manolo);


contacto1.printPersons();