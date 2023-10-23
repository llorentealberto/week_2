import { Mobile } from "./mobile";



let nokia =new Mobile("viejo" , "nokia" , "5010" ,"negro" , 35);

let samsung =new Mobile("calvo" , "samsung" , "note 8 " ,"azul" , 500);

let iphone =new Mobile("el mas caro " , "apple" , " 15" ,"negro" , 1600);

let todos=[nokia , samsung , iphone];

nokia.setName("masViejo");

console.log(nokia.getName());

nokia.setTrademark("huawei");

console.log(nokia.getTrademark());

nokia.setModel("otroModelo");

console.log(nokia.getModel());

nokia.setColor("gris");

console.log(nokia.getColor());

nokia.setPrice(500);

console.log(nokia.getPrice());



for(let i=0 ;i<todos.length ; i++){

    console.log(todos[i].toString());
}




//console.log(nokia.toString());