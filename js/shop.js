// TODO: If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
const PRODUCTS = [
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
const CART_LIST = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const CART = [];

let total = 0;

// Exercise 1
/*
 * En primer lloc, en tractar-se d'un e-commerce, farem que l'usuari/ària pugui afegir productes al carretó.
 * La funció que has de completar es diu buy(), la qual rep l'id del producte a afegir. Has de buscar el producte utilitzant aquest id rebut a l'array products, per finalment afegir-ho al array cartList.
 * Els botons que han d'executar la funció buy() són els blaus que es troben en cada producte:
 */
function buy(id) {
  //! Cada `Add to Cart` tiene un onclick con la función buy() y su propio id como argumento
  //   ? ¿Se añade a CART o CART_LIST? Diferencia entre enunciado moodle y enunciado inferior
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
  let i = 0;
  const LONGITUD_ARRAY = PRODUCTS.length;

  //TODO: Intentar hacerlo con otro tipo de bucle

  for (let i = 0; i < LONGITUD_ARRAY; i++) {
    if (PRODUCTS[i].id === id) {
      CART_LIST.push(PRODUCTS[i]);
    }
  }

  //? Lo muestro por consola y por DOM
  console.log(CART_LIST);
  document.getElementById("count_product").innerHTML = CART_LIST.length;
}

// Exercise 2
/*
 * Ara implementarem una funció que permeti a l'usuari/ària eliminar l'array generat a l'anterior exercici: buidar el carret.
 *En aquest cas, hauràs d'emplenar la funció cleanCart(), la qual ha de reinicialitzar la variable cartList.
 */
function cleanCart() {
  // Este método funciona:
  // CART_LIST.length = 0;

  // Este también funciona:
  CART_LIST.splice(0, CART_LIST.length);

  // Lo muestro por consola y por DOM
  console.log(CART_LIST);
  document.getElementById("count_product").innerHTML = CART_LIST.length;

  //! Pruebas (borrar más adelante)
  // También añadimos el hecho de borrar el `importeTotal` del carrito:
  document.getElementById("total_price").innerHTML = 0;
}

// Exercise 3
/*
 * Genial, l'e-commerce va prenent forma!, és el moment de calcular el total de l'import del carretó.
 * S'ha d'implementar un bucle for per anar sumant l'import de tots els productes.
 */
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  let importeTotal = 0;
  let i = 0;
  const LONGITUD_ARRAY = CART_LIST.length;

  for (let i = 0; i < LONGITUD_ARRAY; i++) {
    importeTotal += CART_LIST[i].price;
  }

  console.log(importeTotal);
  document.getElementById("total_price").innerHTML = importeTotal;
}

// Exercise 4
function generateCart() {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
}

// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
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
  printCart();
}
