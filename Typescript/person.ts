

export 
class Person{

     public name: string;
     public age: number;
     private address:string;

     constructor(name:string , age:number , address:string){

          this.name=name;
          this.age=age;
          this.address=address;
          



     };

     public printName(){


           console.log(this.name);
     }


     public yearOfBirth(currentYear:number):number{

          
          return currentYear-this.age;

          
     }
     public setAddress(address:string):void{

      this.address=address;
     }

     public getAddress():string{


          return this.address;

     }
     
}

let persona1= new Person("jaime",15,"calle tajo");

persona1.printName();

console.log(persona1.getAddress());

