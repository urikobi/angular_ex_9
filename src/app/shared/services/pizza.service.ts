import { Injectable } from '@angular/core';
import { Pizza } from "../models/pizza.model";

@Injectable()
export class PizzaService {
  getPizzaList(): Pizza[] {
    let pizzas = new Array<Pizza>();
    for(let i=0;i<100;i++){
      let diameter = Math.floor((Math.random() * 50) + 10);
      console.log("diameter: ",diameter);
      let slices = Math.floor((Math.random() * 8) + 3);
      console.log("slices: ",slices);
      let toppings = Math.floor((Math.random() * 4) + 0);
      console.log("toppings: ",toppings);
      pizzas.push(new Pizza(diameter,slices,toppings));
      
    }
    console.log("pizzas[0]: ",pizzas[0])
    return pizzas;
  }
}
