export  class Vector{


    private elements: number[];

    

    public n:number;
    public k:number;
    constructor(n:number , k:number){

        this.n=n;
        this.k=k;
        this.elements=[];

        for( let i=0 ; i<n ; i++){

            this.elements.push(Math.floor(Math.random()*(k+1)))

        }

    
    }
    public getElements(): number[] {
        return this.elements;
    }

        public print(){

            return Vector;
        }

        public add(v1:Vector){
            let resultado=new Vector(0,0);

            if(v1.elements.length== this.elements.length){
           for( let i=0 ; i<this.elements.length ; i++){

               resultado.elements.push(v1.elements[i]+this.elements[i]);

           }
        }
           return resultado
        }

        public subs(v1:Vector):Vector{
             let resultado=new Vector(0,0);
            for( let i=0 ; i<this.elements.length ; i++){

                resultado.elements.push(v1.elements[i]-this.elements[i]);

            }
        
            return resultado
            


        }
    
        public mult(v1:Vector):Vector{
            let resultado=new Vector(0,0);
           for( let i=0 ; i<this.elements.length ; i++){

               resultado.elements.push(v1.elements[i]*this.elements[i]);

           }
       
           return resultado


       }
       public multNumber(v1:Vector){
        let resultado=new Vector(0,0);
       for( let i=0 ; i<this.elements.length ; i++){

           resultado.elements.push(v1.elements[i]*this.n);

       }
   
       


   }    
}