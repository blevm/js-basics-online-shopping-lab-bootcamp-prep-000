var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const itemPrice = Math.floor(Math.random() * 100) + 1;

  cart.push({ [item]: itemPrice });

  console.log(`${item} has been added to your cart.`);

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
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
