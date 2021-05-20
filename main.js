window.onscroll = function () {
    scrollFunction();
};
/* Hides navbar when user scrolls down.
*/
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $(".navbar").addClass('invisible');
    } else {
        $(".navbar").removeClass('invisible');
    }
}

//Messages disappear in 15 sec

window.setTimeout("closeDiv();", 15000);
function closeDiv()
{
    var temp = document.getElementById("message")
    if (temp != null)
        temp.style.display = "none";
}


// $('#my_button').click(function() {
//     if ( ! $('form input:invalid' ).length ) {
//       setTimeout(function() {$('.my_modal').modal('hide');}, 2000);
//     }
//   });


// login feature
//https://www.youtube.com/watch?v=mJa_3IiKxFk
function loginValidate(form) {
    username = document.getElementsByClassName("userID").value;
    password = document.getElementsByClassName("passID").value;
    //Hardcoded email & Password

    
    if (form.username.value == "user" && form.password.value == "pass") {

        document.getElementById("loginstate").innerHTML ="You are successfully logged in!";
    }else{
        document.getElementById("loginstate").innerHTML ="Email or password is incorrect. Please try again";
    }
}




//         alert("Logged In");
//         window.open("gallery.html")
//     } else {
//         alert("wrong email or password.");
//     }
// }
function checkoutValidate() {
  var  nameOnCard = document.getElementById("cc-name").value;
  var  cardNumber = document.getElementById("cc-number").value;
  var  expiry = document.getElementById("cc-expiration").value;
  var  cvv = document.getElementById("cc-cvv").value;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

   if (nameOnCard == "artist" && cardNumber == 123 && expiry == "12/25" && cvv == 321){
       
          alert("Payment recieved. You will get an email for order confirmation");                                                                                                       
   }else{
       alert("Payment unsuccessful, please try again");
   }
}

    //Hardcoded email & Password
// document.querySelector("#myForm").addEventListener("click", function(e){
//     e.preventDefault();
//     loginValidate();
// });

// Logout

//https://stackoverflow.com/questions/49799121/javascript-logout-function-phonegap-mobile-development
$(document).ready(function () {
    $("#logout").click(function () {
        localStorage.login = "false";
        localStorage.removeItem("email");
        window.location.href = "index.html";
    });
});


// https://www.youtube.com/watch?v=PoTGs38DR9E
// Add Cart function

let addToCartButtons = document.getElementsByClassName('add-cart-btn');
let products = [
    {
        name: "Rain walk",
        tag: 'rainwalk',
        price: 78,
        inCart: 0
    },
    {
        name: "Flowers",
        tag: "flowers",
        price: 80,
        inCart: 0
    },
    {
        name: "Modern Art",
        tag: "modern",
        price: 160,
        inCart: 0
    },
    {
        name: "Rocks",
        tag: "rocks",
        price: 100,
        inCart: 0
    },
    {
        name: "City Square",
        tag: "citysquare",
        price: 150,
        inCart: 0
    },
    {
        name: "Yellow Flower",
        tag: "yellowflower",
        price: 60,
        inCart: 0
    }
    
]


// picking up all the Add-To-Cart buttons
for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', () => {
        // console.log("added to cart");
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

//local storage for cart
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product, action) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if( action ) {
        localStorage.setItem("cartNumbers", productNumbers - 1);
        document.querySelector('.cart span').textContent = productNumbers - 1;
        console.log("action running");
    } else if( productNumbers ) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}



/*
function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers); // convert string to number

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}


*/

function setItems(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        let currentProduct = product.tag;
    
        if( cartItems[currentProduct] == undefined ) {
            cartItems = {
                ...cartItems,
                [currentProduct]: product
            }
        } 
        cartItems[currentProduct].inCart += 1;

    } else {
        product.inCart = 1;
        cartItems = { 
            [product.tag]: product
        };
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}


/*
// function to select product and add to cart
function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);


    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {  // update cart items with the already existing items in cart
            cartItems = {
                ...cartItems,
                [product.tag]: product // add new product
            }
        }

        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify
        (cartItems));

}
*/

function totalCost( product, action ) {
    let cart = localStorage.getItem("totalCost");

    if( action) {
        cart = parseInt(cart);

        localStorage.setItem("totalCost", cart - product.price);
    } else if(cart != null) {
        
        cart = parseInt(cart);
        localStorage.setItem("totalCost", cart + product.price);
    
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}


/*
//function to add the cost of products selected 
function totalCost(product) {

    let cartCost = localStorage.getItem('totalCost');

    console.log("cost is :", cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost); // converting string to number
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }

}
*/
//Cart display
function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems) //converting to js objects
    // console.log(cartItems);
    let cartCost = localStorage.getItem('totalCost');
    cartCost = parseInt(cartCost);
    let productContainer = document.querySelector(".products");
    let orderSummary = document.querySelector(".order-summary")
    // console.log(cartItems);

    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class ="products col-4">
            <i class="fas fa-times-circle remove"></i>
            <img src="./images/${item.tag}.png">
            <span>${item.name}</span>
            </div>
            <div class ="price col-3 pt-4"> $${item.price}.00</div>
            <div class = "quantity col-3 pt-4">
            <i class="fas fa-chevron-circle-left decrease"></i>
            <span>${item.inCart}</span>
            <i class="fas fa-chevron-circle-right increase"></i>
            </div>
            <div class ="total col-2 pt-4">
            $${item.inCart * item.price}.00
            </div>
            `;
            
            
        });
        orderSummary.innerHTML = `
        <div class=" order-summary row mb-2"> 
         <div class="col-8">
              <p>Sub Total:</p>
          </div>
          <div class="col-4">
              <p>$${cartCost}</p>
          </div>
        </div>
        <div class="row mb-2">
          <div class="col-8">
              <p>Shipping:</p>
          </div>
          <div class="col-4">
              <p>FREE</p>
          </div>
        </div>
        <div class="row mb-2">
          <div class="col-8">
              <p>Order Total:</p>
          </div>
          <div class="col-4">
              <p>$${cartCost}</p>
         </div> 
        </div> `          
            deleteButtons();
            manageQuantity();
    }else {
        document.getElementById("cart-text").innerHTML = "There are no items in your cart";
        document.getElementById("product-head").style.display = "none";
        document.getElementById("order-container").style.display = "none";
        
    }

}

function manageQuantity() {
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let currentQuantity = 0;
    let currentProduct = '';
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    for(let i=0; i < increaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            console.log(currentProduct);

            if( cartItems[currentProduct].inCart > 1 ) {
                cartItems[currentProduct].inCart -= 1;
                cartNumbers(cartItems[currentProduct], "decrease");
                totalCost(cartItems[currentProduct], "decrease");
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                displayCart();
            }
        });

        increaseButtons[i].addEventListener('click', () => {
            //console.log(cartItems);
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            //console.log(currentProduct);

            cartItems[currentProduct].inCart += 1;
            cartNumbers(cartItems[currentProduct]);
            totalCost(cartItems[currentProduct]);
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            displayCart();
        });
    }
}

// Remove Product

function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.products i');
    let productNumbers = localStorage.getItem('cartNumbers');
    let cost = localStorage.getItem("totalCost");
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productName;
    console.log(cartItems);

    for(let i=0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].parentElement.textContent.toLocaleLowerCase().replace(/ /g,'').trim();
           
            localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
            localStorage.setItem('totalCost', cost - ( cartItems[productName].price * cartItems[productName].inCart));

            delete cartItems[productName];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));

            displayCart();
            onLoadCartNumbers();
        })
    }
}


onLoadCartNumbers();
displayCart(); // display cart items when page loads

//Modal





/*

let addToCartButtons = document.getElementsByClassName('add-cart-btn')
// picking up all the Add-To-Cart buttons
for(let i = 0; i < addToCartButtons.length; i++){
    addToCartButtons[i].addEventListener('click', addToCart)

}
function addToCart(event){
    // let btn = event.target
    // let btn_parent = btn.parentElement
    // let btn_grandparent = btn.parentElement.parentElement
    // let itemName = btn_parent.children[0].innerText

    // console.log(itemName)
    let btn = event.target
    let btnGrandParent = btn.parentElement.parentElement
    let btnParent = btn.parentElement
    let itemImage = btnGrandParent.children[0].src
    let itemName = btnParent.children[0].innerText
    let itemPrice = btnParent.children[1].innerText
    console.log(itemName)
}

*/








// // Carousal image chages every time page loads
// var $numberofSlides = $('.carousel-item').length;
// var $currentSlide = Math.floor((Math.random() * $numberofSlides));

// $('.carousel-indicators li').each(function(){
//   var $slideValue = $(this).attr('data-slide-to');
//   if($currentSlide == $slideValue) {
//     $(this).addClass('active');
//     $item.eq($slideValue).addClass('active');
//   } else {
//     $(this).removeClass('active');
//     $item.eq($slideValue).removeClass('active');
//   }
// });