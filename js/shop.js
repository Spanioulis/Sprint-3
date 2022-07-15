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

  document.getElementById("count_product").innerHTML = cartList.length;
}

// Exercise 2
function cleanCart() {
  // Este método funciona:
  // CART_LIST.length = 0;

  // Este también funciona:
  cartList.splice(0, cartList.length);
  cart.splice(0, cart.length);

  // Borrar unidades del carrito
  document.getElementById("count_product").innerHTML = cartList.length;

  // Borrar importe total
  document.getElementById("total_price").innerHTML = 0;

  // TODO: debería tener que borrarse también el printCart()
  // ! Cuando sales del Opne Modal se borra
  // ? ¿A través de "table"?
  // function borrarLista() {
  //   return "cart_list".remove();
  // }
  // borrarLista();
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  let importeTotal = 0;
  const LONGITUD_ARRAY = cartList.length;

  for (let i = 0; i < LONGITUD_ARRAY; i++) {
    importeTotal += cartList[i].price;
  }

  document.getElementById("total_price").innerHTML = importeTotal.toFixed(2);
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
      cartList[i].quantity = 1;
      cart.push(cartList[i]);
    } else {
      // Cambiará cantidad ya que encontrará siempre la posición; sino la encontrara el valor seria `-1`
      let position = cart.indexOf(existeArticulo);
      cart[position].quantity += 1;
    }
  }
}

// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"

  //TODO: Hacerlo mediante una forma de búsqueda de si el producte tiene offer o no...
  // let tienePromocion = cart.find((element) => element.offer !== undefined);
  //TODO: Hacer búsqueda de la id según si existe o no el artículo

  let LONGITUD_ARRAY = cart.length;

  for (let i = 0; i < LONGITUD_ARRAY; i++) {
    if (cart[i].id === 1) {
      if (cart[i].quantity >= 3) {
        cart[i].price = 10;
        cart[i].subtotalWithDiscount = cart[i].quantity * cart[i].price;
      } else {
        cart[i].subtotalWithDiscount = ` `;
      }
    } else if (cart[i].id === 3) {
      if (cart[i].quantity >= 10) {
        cart[i].price = cart[i].price * (2 / 3);
        cart[i].subtotalWithDiscount = (
          cart[i].quantity * cart[i].price
        ).toFixed(2);
      } else {
        cart[i].subtotalWithDiscount = ` `;
      }
    } else {
      cart[i].subtotalWithDiscount = ` `;
    }
  }

  console.table(cart);
  // document.getElementById("cooking-oil").innerHTML = `$${subtotalOil}`;
  // document.getElementById("cupcake").innerHTML = `$${subtotalCupcake}`;

  // Llamar a la función para que actualice el precio total al finalizar esta función
  calculateTotal();
  // printCart();
}

// Exercise 6
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom

  let mensaje = ``;

  for (let i = 0; i < cart.length; i++) {
    mensaje += `<tbody><tr><th scope="row">${products[i].name}</th>
    </th><td>${cart[i].price.toFixed(2)}</td><td>${cart[i].quantity}</td><td>$${
      cart[i].subtotalWithDiscount
    }</td></tr>
   </tbody>`;
  }

  document.getElementById("cart_list").innerHTML = mensaje;
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

  applyPromotionsCart();
  printCart();
}
