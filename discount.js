/****************************************************************Workshop: Discount Chain********************************************************************************/

// create a function that takes in customer object as a parameter
// inside the function calcualte the total cost of refill by multiplying price per refill and number of refills
// if the customer has a subscription the customer will receive a 25% discount after the refill total is calculated
// return the total cost of refill

const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};

// function that takes in customer object as a parameter
function calculateTotalCost(customer) {
  // calculate the total cost of refill by multiplying price per refill and number of refills
  let refillTotal = customer.pricePerRefill * customer.refills;
  // if the customer has a subscription the customer will receive a 25% discount after the refill total is calculated
  if (customer.subscription) {
    refillTotal = refillTotal * 0.75;
  }
  return refillTotal;
}

// now we will create another function for customers that have a coupon
function totalWithCoupon(customer) {
  let refillTotal = calculateTotalCost(customer);
  // if the customer has a coupon the customer will receive $10 discount after the subscription discount has been calculated
  if (customer.coupon) {
    refillTotal = calculateTotalCost(customer) - 10;
  }
  return refillTotal;
}

// now we create a function that calculates the total
// function grandTotal(customer) {
//   let total = totalWithCoupon(customer);
//   console.log("your grand total is $${finalAmount}");

//   //   return finalAmount;
// }
function grandTotal(customer) {
  let total = totalWithCoupon(customer);
  console.log(`your grand total is $${total}`);
  return total;
}

grandTotal(timmy);
grandTotal(sarah);
grandTotal(rocky);

/* 
 _________________________________
| Results printed in order       |

your grand total is $65
your grand total is $37.5
your grand total is $102.5


    

*/

// using arrow functions

/* const totalCostPerRefill = (object) => object.pricePerRefill * object.refills; */

/* // creeate a function that adds discounts $$ off or percentage off
function addDiscounts(object) {
  let total = totalCostPerRefill(object); // this is the total cost of refill before discount
  // if a custimer has a subscription they will receive a 25% discount
  if (object.subscription === true) {
    total = total * 0.25;
  }
  // if a customer has a coupon they will receive $10 off
  if (object.coupon === true) {
    total = total - 10;
  }
  // now we return the total
  return total;
}

// now we will create a function that calculates the grand total
function grandTotal(object) {
  // we will call the addDiscounts function and pass in the object as an argument
  let total = addDiscounts(object);
  // now we will console log the total
  console.log(`your grand total is $${total}`);
  // now we will return the total
  return total;
}

// now we will call the grandTotal function and pass in the object as an argument
grandTotal(timmy);
grandTotal(sarah);
grandTotal(rocky);
 */
