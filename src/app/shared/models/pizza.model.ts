// Creating a Model (it doesn't need to be registered anywhere):
export class Pizza {
    constructor(public diameter: number, public slices: number, public toppings:number, public price: number = (diameter + 5*toppings)) { }
    
    print():string{
        return `Diameter: ${this.diameter}
                slices: ${this.slices}
                toppings: ${this.toppings}
                price: ${this.price}`;
    }
}