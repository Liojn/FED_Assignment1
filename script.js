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
  let close = document.querySelector("section")
  section.classList.toggle('showCart')/*********************************** Toggle Off the showCart Class***************** */
}


