var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  const itemPrice = Math.floor(Math.random() * 100) + 1;

  cart.push({ [itemName]: itemPrice });

  console.log(`${itemName} has been added to your cart.`);

  return cart;
}

function viewCart() {
  const cartLength = cart.length;

  if (!cartLength) {
    return console.log("Your shopping cart is empty.");
  }

  let itemsAndPrices = [];

  for (let cartIndex = 0; cartIndex < cartLength; cartIndex++) {
    let eachItem = cart[cartIndex];
    let itemName = Object.keys(eachItem)[0];
    let itemPrice = eachItem[itemName];

    itemsAndPrices.push(`${itemName} at \$${itemPrice}`);
}

    switch (itemsAndPrices.length) {
    case 1:
      break;
    case 2:
      itemsAndPrices = itemsAndPrices.join(" and ");
      break;
    default:
        itemsAndPrices[cartLength-1] = "and ".concat(itemsAndPrices[cartLength-1]);
        itemsAndPrices = itemsAndPrices.join(", ");
    }

    console.log(`In your cart, you have ${itemsAndPrices}.`);
}

function total() {
  const cartLength = cart.length;

  let total = 0;

  for (let cartIndex = 0; cartIndex < cartLength; cartIndex++) {
    for (let itemName in cart[cartIndex]) {
      total += cart[cartIndex][itemName];
}

function removeFromCart(item) {
  let itemInCart = false;

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
      l--;
    }
  }
}

  if (!itemInCart) {
    console.log("That item is not in your cart.");
  }

  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
    return false;
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);

  cart = [];
}
