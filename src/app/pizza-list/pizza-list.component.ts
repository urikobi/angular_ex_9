import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../shared/services/pizza.service';
import { Pizza } from '../shared/models/pizza.model';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})

export class PizzaListComponent implements OnInit {

  pizzas: Pizza[];
  constructor(public pizzaService: PizzaService) { }

  ngOnInit() :void {
    this.pizzas = this.pizzaService.getPizzaList();
    }

}
