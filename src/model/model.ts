import { DataResource } from "../service/DataResource";

export interface PizzaModel {
     id: number,
     title: string,
     description: string,
     price: number,
     toppings: string[]
}

export const Pizza = new DataResource<PizzaModel>("http://localhost:3000/pizzas")