import { Mobile } from "./mobile";

 export class MobileCollection{

    private mobiles: Mobile[];

    private totalPrice:number;

   

    constructor(mobiles:Mobile[]  ){

        this.mobiles=mobiles;
        
        this.totalPrice=this.totalPriceCalculation();
    }

    public getMobiles(): Mobile[] {
        return this.mobiles;
    }

    public setMobiles(mobiles: Mobile[]): void {
        this.mobiles = mobiles;
    }

    public getTotalPrice(): number {
        return this.totalPrice;
    }

    public setTotalPrice(totalPrice: number): void {
        this.totalPrice = totalPrice;
    }

   private totalPriceCalculation():number{
        let resultado=0 ;
     for( let i=0 ; i<this.mobiles.length ; i++){

        resultado += this.mobiles[i].getPrice() ;

        

                
     }
     return resultado ;
   }



}