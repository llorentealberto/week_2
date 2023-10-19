class Person {

    constructor(peso, altura , raza , colorPelo , sexo , nacionalidad , yearOfBirth , hobbies){

        this.altura=altura;
        this.peso=peso;
        this.raza=raza;
        this.colorPelo=colorPelo;
        this.sexo=sexo;
        this.nacionalidad=nacionalidad;
        this.yearOfBirth=yearOfBirth;
        this.hobbies=["correr" ,"beber", "salir","trabajar"];

    }

    calculoIMC(){

        return this.peso*this.altura;
    }

    calcedad(){
        let dia =new Date();

        let ano=dia.getFullYear();
        return  ano-this.yearOfBirth;

    }

    printAll(){

        for (let propiedad in this){

            console.log(`${propiedad}: - ${this[propiedad]}` );
        }
    }

    printHobbies(){

        for(let i =0 ; i<this.hobbies.length ; i++){

            console.log(this.hobbies[i]);
        }
    }
}

module.exports={Person};