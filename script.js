/**************************Check if Sign In/ SIgn Up Filled before redirecting*************** */

document.addEventListener("DOMContentLoaded", function () {
  function signUp() {
      var email = document.querySelector("input[type='email']").value;
      var password = document.querySelector("input[type='password']").value;
      var checkbox = document.querySelector("input[type='checkbox']");

      // Check if email, password, and checkbox are filled or selected
      if (email && password && checkbox.checked) {
          // Redirect to index.html
          window.location.href = "index.html";
      } else {
          // Display an alert or message for incomplete fields
          alert("Please fill in all the required fields and agree to the terms of service.");
      }
  }

  // Attach the signUp function to the button click event
  var signUpButton = document.querySelector(".LogInBtn");
  signUpButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the form from submitting
      signUp(); // Call the signUp function
  });
});


/********************************** HamBurger Menu**************** */
  document.addEventListener('DOMContentLoaded', function () {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navList = document.querySelector('.nav-list');
  
    // Toggle the 'show-nav' class on the navList when the hamburger button is clicked
    hamburgerBtn.addEventListener('click', function () {
      navList.classList.toggle('show-nav');
    });
  });

  /************************************** SHOPPING CART******************************* */
  function toggleCart() {
    let section = document.querySelector("section");
    section.classList.toggle('showCart');/********************* Toggle On the showCart class***************** */
}


function toggleClose() {
  let section = document.querySelector("section")
  section.classList.toggle('showCart')/*********************************** Toggle Off the showCart Class***************** */
}


/******************************Initlaizing stuff**********/

let cartListHTML = document.querySelector('.cartList'); /**Getting Shopping cart list */
let listCoffeeHTML = document.querySelector('.CoffeeProducts');
let iconCartSpan = document.querySelector('.cart span');
let listCoffee = [];
let cart = [];

/********************************************************* */


const addDataToHTML = () => {
  listCoffeeHTML.innerHTML = ' ';
  if(listCoffee.length >0){
    listCoffee.forEach(coffee => {
      let newCoffee = document.createElement('div')
      newCoffee.classList.add('CProduct')
      newCoffee.dataset.id = coffee.id
      newCoffee.innerHTML = `
      <img src="${coffee.image}" alt="">
      <h2>${coffee.name}</h2>
      <div class = "CoffeePrice">$${coffee.price}</div>
      <button class="AddCart">Add To Cart</button>
      `;
      listCoffeeHTML.appendChild(newCoffee)
    })
  }
}

listCoffeeHTML.addEventListener('click', (event) =>{
  let ClickPosition = event.target 
  if(ClickPosition.classList.contains('AddCart')){//Checking if the place where user click has the class AddCart
    let coffeeID = ClickPosition.parentElement.dataset.id;
    addToCart(coffeeID);
  }
})

const addToCart = (coffeeID) => {//Adding to an array to be added to the HTML later
  let positionThisProductInCart = cart.findIndex((value => value.coffeeID == coffeeID))//Find index in the cart. If not found, will return -1
  if(cart.length <= 0){// If current shopping cart is empty.  Add to shopping cart
    cart = [{
      coffeeID: coffeeID,
      quantity: 1
    }]
  }else if (positionThisProductInCart <0){//If it dosent exist, add to the back of cart
    cart.push({
      coffeeID: coffeeID,
      quantity: 1
    })
  }
  else{// If it does exits increase quantity by 1
    cart[positionThisProductInCart].quantity = cart[positionThisProductInCart].quantity + 1;
  }
  addCartToHTML();
}


const addCartToHTML = () => {//Adding items to the cart
  cartListHTML.innerHTML = ''; // Clear the cart list
  let totalQuantity = 0;// Default value for the cart red circle
  if (cart.length > 0) {
    cart.forEach(cartItem => {
      totalQuantity = totalQuantity + cartItem.quantity;
      let newCart = document.createElement('div');
      newCart.classList.add('CoffeeProducts');
      newCart.dataset.id = cartItem.coffeeID
      let positionProduct = listCoffee.findIndex((value) => value.id == cartItem.coffeeID)//Find posistion of the coffee using index to get the other information. the image, price etc
      let info = listCoffee[positionProduct]//Saving the info into an array
      newCart.innerHTML = `
        <div class="CoffeeImage">
          <img src="${info.image}">
        </div>
        <div class="CoffeeName">${info.name}</div>
        <div class="totalPrice">$${info.price * cartItem.quantity}</div>
      
        <div class="quantity">
          <span class="minus"><</span>
          <span>${cartItem.quantity}</span>
          <span class="plus">></span>
        </div>`;

      cartListHTML.appendChild(newCart);
    });
  }
  iconCartSpan.innerText = totalQuantity;//updating the big red circle on the cart icon
};


cartListHTML.addEventListener('click', (event) =>{
  let positionClick = event.target;
  if (positionClick.classList.contains('minus') || positionClick.classList.contains('plus') ){
    let product_id = positionClick.parentElement.parentElement.dataset.id;//Since the data is covered in 2 layers, have to call parent element twice
    let type = 'minus';
    if (positionClick.classList.contains('plus')){
      type = 'plus';
      changeQuantity(product_id,type)
    }

  }
})

const changeQuantity = (product_id,type) =>{
  let positionItemInCart = cart.findIndex((value) => value.product_id)// Find position of item in the shopping cart using find index
}



const InitCart = () =>{
  //get Data from Json
  fetch('products.json')
  .then(response => response.json())//Once data fetch, change data format into something JavaScript can easily understand
  .then( data => {
    listCoffee = data;
    addDataToHTML();
  })
}
InitCart();