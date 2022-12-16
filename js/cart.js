/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  state.cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  $("table_of items tr").remove();

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tablebody = document.querySelector('#cart tbody')

  // TODO: Iterate over the items in the cart
  for ( let i in state.cart.items ){
  // TODO: Create a TR
  let trElem = document.createElement('tr');
  // TODO: Create a TD for the delete link, quantity,  and the item
  let tdElem = document.createElement('td');
  tdElem.textContent = 'delete' 
  tdElem.classList.add('delete')
  tdElem.id = i

  let quantityElem = document.createElement('td');
  tdElem.textContent = this.cart.items[i].quantity 

  let productElem = document.createElement('td');
  tdElem.textContent = this.cart.items[i].product

  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  tablebody.appendChild(trElem);
  trElem.appendChild(tdElem);
  trElem.appendChild(quantityElem);
  trElem.appendChild(productElem);
  }

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  


  // TODO: Save the cart back to local storage


  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
