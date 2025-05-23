import { Pizza, PizzaModel } from "../model/model";

const root = document.querySelector(".root")!;

function createPizzaTemplate(pizza: PizzaModel): string {
  return `
    <div class="pizza">
      <h2 class="title">${pizza.title}</h2>
      <p class="description">${pizza.description}</p>
      <span>${pizza.price}</span>
      <div>
        ${pizza.description.toString()}
      </div>
    </div>
  `;
}

function renderTemplate(createdPizzas: string[], root: Element) {
  const template = document.createElement("template");
  for (let t of createdPizzas) {
    template.innerHTML += t;
  }

  root.append(template.content.cloneNode(true));
}

document.addEventListener("DOMContentLoaded", async () => {
  const pizzas = await Pizza.loadAll();
  const createdPizzas = pizzas.map((pizza) => createPizzaTemplate(pizza));
  console.log(createdPizzas);
  renderTemplate(createdPizzas, root);
});
