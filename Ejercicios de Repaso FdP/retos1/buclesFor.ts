

let num ;

function evenNumber(num){

for( let i=0 ;  i<num ;i++){

    if( i%2!=0){

        console.log(i);
    }

}
}


//evenNumber(88);


// Realizar una función que como parámetro de entrada reciba un array de strings y como
// salida devuelva el array revertido. No se puede utilizar el método revert de la clase array
// La cabecera de la función tendrá el siguiente aspecto: function myRevert(myArr)



let arrSalida:string[]=[];
function myRevert(myarr:string[]):string[]{

    for( let i=myarr.length -1 ; i>=0 ; i--){

        arrSalida.push(myarr[i]);
        
    }
    return arrSalida ;
}


let arrPrueb=["pablo" , "jorge" , "sole"];

//console.log(myRevert(arrPrueb));

// Realizar una función que reciba como parámetro un array de strings que contenga
// nombres de colores y te imprima en cada caso si el color está en el arcoíris o no.
// La cabecera de la función tendrá el siguiente aspecto: function isRainbow(colors)


function isRainbowColor(colors):void{

    // creo el array con todos los colores del arcoiris para luego poder comparar con el 
    let arrArcoiris:string[]=["rojo"  , "naranja" ,"amarillo" , "añil" , "azul" ,"violeta"];

    // hago un bucle para poder ir comparando los colores con cada indice del array

    for(let color of colors){

        if(arrArcoiris.indexOf(colors) >(-1)){

            console.log("este color -> " + color + " si esta en el arcoiris " )
        }else {
            console.log("este color -> "  + color + "no esta en el arcoiris ");
            
        }
    }



}

let pruebaColores =["negro " , "verde" , "naranja" , "mmorado" , "naranja" , "amarillo"];

//isRainbowColor(pruebaColores);


// Realizar una función que te devuelva la suma del numero de caracteres de las palabras
// almacenadas en un array.
// La cabecera de la función tendrá el siguiente aspecto: function add(myWords)


export function add(myWords):number{
let suma=0 ;

    for(let i=0 ;i<myWords.length; i ++){

        suma += myWords[i].length ;
    }

    return suma



}

// let pruebaPalabras= ["jefe" , " que" , "pasa"];

// let porFin= add(pruebaPalabras);

// console.log( " el sumatorio de todas las letras de los ditintos string es : " + porFin);
