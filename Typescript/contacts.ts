import { Person } from "./person";
let jaime=new Person("jaime" , 33 , "riaza");
let manolo=new Person("manolo",65,"caceres");



export class Contacts{


    public people: Person[];
    constructor(){

        this.people=[];


    }

    public printCalendar(){
        console.log(this.people)
    }
}