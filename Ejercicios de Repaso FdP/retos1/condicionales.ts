

function zodiac(day , month){


    

    if( day>=21 && month=="marzo" || day<= 19 && month=="abril"){

             console.log("pepe es Aries");

            
    }else  if( day>=20 && month=="abril" || day<= 20 && month=="mayo"){

         console.log("pepe es tauro");

            
    }else  if( day>=21 && month=="mayo" || day<= 20 && month=="junio"){

         console.log("pepe es geminis");

            

    }else if( day>=21 && month=="junio" || day<= 22 && month=="julio"){

         console.log("pepe es cancer ");

        

     }else if( day>=23 && month=="julio" || day<= 22 && month=="agosto"){

        console.log("pepe es leo  ");

        

     }else if( day>=23 && month=="Agosto" || day<=22 && month=="septeimbre"){

         console.log("pepe es virgo ");

        

     }else if( day>=23 && month=="septiembre" || day<= 22 && month=="octubre"){

        console.log("pepe es Libra");

        

     }else if( day>=23 && month=="octubre" || day<= 21 && month=="noviembre"){

         console.log("pepe es escorpio");

        

     }else if( day>=22 && month=="noviembre" || day<=21  && month=="diciembre"){
        console.log("pepe es sagitario");

        

     }else if( day>=22 && month=="diciembre" || day<= 19 && month=="enero"){

         console.log("pepe es capricornio");

        

     }else if( day>=20 && month=="enero" || day<= 18 && month=="febrero"){

         console.log("pepe es  acuario ");

        

     }else if( day>=19 && month=="febrero" || day<= 20 && month=="marzo"){

         console.log("pepe es  Piscis ");

        

     }
}

zodiac(15 , "marzo");


function continent(country){

        if(country==" españa" || country=="francia" || country=="polonia" || country=="hungria" || country=="finlandia"){

            console.log("tu  continente es europa");
            
        }else if(country==" zambia" || country=="congo" || country=="madagascar" || country=="jovenlandia" || country=="argelia"){

            console.log("tu  continente es Africa");
            
        }else if(country==" argentina" || country=="mexico" || country=="EEUU" || country=="colombia" || country=="uruguay"){

            console.log("tu  continente es america");
            
        }else if(country==" españa" || country=="francia" || country=="polonia" || country=="hungria" || country=="finlandia"){

            console.log("tu  continente es europa");
            
        }else if(country==" china " || country=="japon" || country=="indonesia" || country=="india" || country=="corea del norte"){

            console.log("tu  continente es asia");
            
        }else if(country==" australia " || country=="nueva zelanda" || country=="fiyi" || country=="samoa" || country=="pupua nueva guinea "){

            console.log("tu  continente es oceania ");
            
        }else{
            console.log("eso tiene que estar perdido en la antartida ")
        }
            
        

}


continent("carbonero");







