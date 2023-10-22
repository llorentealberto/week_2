
// Realizar una función que te devuelva si existe un numero par en el array de números que
// introduces como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function hasEven(myNums)


function hasEven(myNums){
    
    let i=0 ;

    let esPar=false ;

    while(i<myNums.length && !esPar){

        if(myNums[i]%2 ==0){
            esPar=true;
        }
        i++
    }

    return esPar;
    


}

let arrPrueba=[1 ,2 ,3 ,4];
const resultado = hasEven(arrPrueba);
if (resultado) {
    console.log("uno de los numeros del array es par ");
  } else {
    console.log("No hay suerte , prueba con otro ");
  }

//   Realizar una función que reciba un array de nombres y te devuelva verdadero si y solo si
//   todos los nombres empiezan por M.
//   La cabecera de la función tendrá el siguiente aspecto: function startWithM(myNames)


function starWithM(myNames):boolean{

        let i=0;

        let empiezaPorM =true;

        while(i<starWithM.length && empiezaPorM){

            if(!myNames[i].startsWith("m")){

                empiezaPorM=false;
                
                
            }
            i++;
        }
        return empiezaPorM ;


}

let pruebaBool=["aario" , "maria"];

console.log(starWithM(pruebaBool));

