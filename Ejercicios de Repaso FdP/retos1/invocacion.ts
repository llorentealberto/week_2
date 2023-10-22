import { isEven } from "./condicionales";
import { add } from "./buclesFor";


let aleatorio1=["casa" , "coche" , "ciudad", "cesta"];

let aleatorio2=["barco" , "baca" , "bicicleta" , "balon" , " bisiesto" , "brasil"];

let aleatorio3=["Venezuela" , "veneno" , "voltaje"];


let sum1=add(aleatorio1);
let sum2=add(aleatorio2);
let sum3=add(aleatorio3);

let total=sum1 + sum2 + sum3 ;

console.log(isEven(total));
