 import { Person } from "./person";
import { Contacts } from "./contacts";

let jaime=new Person("jaime" , 33 , "riaza");
let manolo=new Person("manolo",65,"caceres");


let contacto1= new Contacts();

contacto1.people=[jaime, manolo];

contacto1.printCalendar();


