// TODO: If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

let total = 0;

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
  let i = 0;
  const LONGITUD_ARRAY = products.length;

  for (let i = 0; i < LONGITUD_ARRAY; i++) {
    if (products[i].id === id) {
      cartList.push(products[i]);
    }
  }

  //? Lo muestro por consola y por DOM (carrito de la compra)
  //* De momento lo comento para evitar problemas en ejercicio 4
  // console.log(CART_LIST);
  document.getElementById("count_product").innerHTML = cartList.length;
}

// Exercise 2
function cleanCart() {
  // Este método funciona:
  // CART_LIST.length = 0;

  // Este también funciona:
  cartList.splice(0, cartList.length);

  // Lo muestro por consola y por DOM
  // console.log(cartList);
  document.getElementById("count_product").innerHTML = cartList.length;

  //! Pruebas (borrar más adelante)
  // También añadimos el hecho de borrar el `importeTotal` del carrito:
  document.getElementById("total_price").innerHTML = 0;
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  let importeTotal = 0;
  let i = 0;
  const LONGITUD_ARRAY = cartList.length;

  for (let i = 0; i < LONGITUD_ARRAY; i++) {
    importeTotal += cartList[i].price;
  }

  console.log(importeTotal.toFixed(2));
  document.getElementById("total_price").innerHTML = importeTotal.toFixed(2);
  // return importeTotal;
}

// Exercise 4
function generateCart() {
  /* Using the "cartlist" array that contains all the items in the shopping cart,
  generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product. */

  const LONGITUD_CART_LIST = cartList.length;

  for (let i = 0; i < LONGITUD_CART_LIST; i++) {
    // Buscar si dentro de [cart] encontramos el artículo con esa 'id' de cartList
    let existeArticulo = cart.find((element) => element.id === cartList[i].id);

    if (existeArticulo === undefined) {
      // Crear nuevo objeto con nueva propiedad (añadir valor predeterminado)
      // let newObject = cartList[i];
      // newObject.quantity = 1;
      cartList[i].quantity = 1;
      cart.push(cartList[i]);
    } else {
      // Cambiará cantidad ya que encontrará siempre la posición; sino la encontrara el valor seria `-1`
      let position = cart.indexOf(existeArticulo);
      cart[position].quantity += 1;
    }
  }

  console.table(cart);
  applyPromotionsCart();
}

// Exercise 5
// TODO: cuando hagat commit Exercise 5, añadir que ha habido cambio en Exercise 4 (clg fuera del for)
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  // * Hacer un find(por id 1 y 3) por cada producto al que queremos hacerle oferta (let aceite / let postres)
  // * Similar al ejercicio de Francis Ford Coppola; así ya podemos ver si están o no están
  // * Hay que crear una propiedad `subtotalWithDiscount` en el array [cart]
  // * ¿Operación matemática?
  // * ¿Cambio de precio del producto? ((cart.price = 10)) - La idea sería como en el Exercice 4, con el indexOf...
  // *

  let LONGITUD_ARRAY = cart.length;
  let subtotal = 0;

  //TODO: Hacerlo mediante una forma de búsqueda de si el producte tiene offer o no...
  // let tienePromocion = cart.find((element) => element.offer !== undefined);

  //TODO: Hacer búsqueda de la id según si existe o no el artículo

  for (let i = 0; i < LONGITUD_ARRAY; i++) {
    if (cart[i].id === 1) {
      if (cart[i].quantity >= 3) {
        cart[i].price = 10;
        cart[i].subtotalWithDiscount = cart[i].quantity * cart[i].price;
        subtotalOil = cart[i].subtotalWithDiscount;
      } else {
        cart[i].subtotal = cart[i].quantity * cart[i].price;
        subtotalOil = cart[i].subtotal;
      }
    } else if (cart[i].id === 3) {
      if (cart[i].quantity >= 10) {
        cart[i].price = Number(cart[i].price * (2 / 3).toFixed(2));
        cart[i].subtotalWithDiscount = cart[i].quantity * cart[i].price;
        subtotalCupcake = cart[i].subtotalWithDiscount;
      } else {
        cart[i].subtotal = cart[i].quantity * cart[i].price;
        subtotalCupcake = cart[i].subtotal;
      }
    } else {
      // Añadir subtotal al resto de artículos
      cart[i].subtotal = cart[i].quantity * cart[i].price;
    }
  }

  console.table(cart);
  document.getElementById("cooking-oil").innerHTML = `$${subtotalOil}`;
  document.getElementById("cupcake").innerHTML = `$${subtotalCupcake}`;

  // Llamar a la función para que actualice el precio total al finalizar esta función
  calculateTotal();
}

// Exercise 6
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

function open_modal() {
  console.log("Open Modal");

  /* Al hacer click en este 'button', llamaríamos a esta función, pero CUIDADO: cada vez que abramos el Òpen Modal` */
  // generateCart();

  calculateTotal();
  printCart();
}
