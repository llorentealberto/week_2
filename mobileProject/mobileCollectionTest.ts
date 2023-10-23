import { MobileCollection } from "./mobileCollection";
import { Mobile } from "./mobile";


let nokia =new Mobile("viejo" , "nokia" , "5010" ,"negro" , 35);

let samsung =new Mobile("calvo" , "samsung" , "note 8 " ,"azul" , 500);

let iphone =new Mobile("el mas caro " , "apple" , " 15" ,"negro" , 1600);

let caterpillar =new Mobile("resistente " , "cat" , " gordo" ,"rojo" , 200);

let allMobiles =[nokia , samsung , iphone , caterpillar];


let arrprueba=new MobileCollection(allMobiles);


 let col1=new MobileCollection(allMobiles);

 //console.log(col1.getMobiles());

 //col1.setMobiles(allMobiles);


 //col1.setTotalPrice(30000);

 console.log(col1.getTotalPrice());

 
 
 

 

 

 




