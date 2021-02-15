const shoppingList = ['pizza', 'chips', 'salsa', 'coffee'];
const cart = [];

// TODO: add 'apples' to the end of the shoppingList
shoppingList.push ("apples");
// TODO: add 'bread' to the front of the shoppingList
shoppingList.unshift("bread");
// TODO: use indexOf to replace 'coffee' with 'tea'
shoppingList.splice(shoppingList.indexOf("coffee"), 1, "tea");
// TODO: use splice to replace `chips` and `salsa` with `rice` and `beans`
shoppingList.splice(shoppingList.indexOf("chips"), 2, "rice", "beans");
// TODO: put the first and the last items from your shoppingList into your cart
cart.unshift(shoppingList[0]);
cart.push(shoppingList[shoppingList.length-1]);
shoppingList.pop();
shoppingList.shift();

// now let's see what we got
console.log('shoppingList:', shoppingList);
console.log('cart:', cart);