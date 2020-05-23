// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}


function renderIngredients (selector, key) {
  document.querySelectorAll(selector).forEach(ingredient => {
    if (state[key]) {
      ingredient.style.visibility = 'visible';
    } else {
      ingredient.style.visibility = 'hidden';
    }
  });
}

function renderExtras(selector, key, activeClass) {
  const extra = document.querySelector(selector);
  if (state[key]) {
    extra.classList.add(activeClass)
  } else {
    extra.classList.remove(activeClass)
  }
}

function renderPepperoni() {
  renderIngredients ('.pep', 'pepperoni');
}

function renderMushrooms() {
  renderIngredients ('.mushroom', 'mushrooms');
}

function renderGreenPeppers() {
  renderIngredients ('.green-pepper', 'greenPeppers');
}


function renderWhiteSauce() {
  // Iteration 2: add/remove the class “sauce-white” of `<section class=“sauce”>`
  renderExtras('.sauce', 'whiteSauce', 'sauce-white')
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  renderExtras('.crust', 'crust-gluten-free', 'glutenFreeCrust')
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();


// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`

function generalClickEvent(button, key) {
  document.querySelector(button).addEventListener('click', () => {
    state[key] = !state[key];
    renderEverything();
  }); 
}

generalClickEvent('.btn.btn-pepperoni', 'pepperoni')

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

generalClickEvent('.btn.btn-mushrooms', 'mushrooms')

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

generalClickEvent('.btn.btn-green-peppers', 'greenPeppers')

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
