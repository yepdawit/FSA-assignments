/* ************Unit Tests********************* */
// multiplication test

/* 
expect multiplication(x,y) to be equal to xy
expected multiplication(1, 2) to be equal to 2
expected multiplication(0, 2) to be equal to 0
expected multiplication(-2, -2) to be equal to 4
expected multiplication(2, -2) to be equal to -4
expected multiplication(x, 4) to be equal to error
expected multiplication(&, 4) to be equal to error

*/

/*------------------------Concat odds-------------------------------  */
/* 
A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.
*/

/* 
expect concatodds[3, 2, 1], [9, 1, 1, 1, 4, 15, -1] to be equal to [-1, 1, 3, 9, 15]
expect concatodds[3, 3, 3], [4, 5, 6, 7, 11] to be equal to [3, 5, 7, 11]
expect concatodds[x, y, z], [4, 5, 6, 7, 11] to be equal to error
expect concatodds[3, 3, 3], [x, y, z] to be equal to error
*/

/* ----------------------------Functional Tests ------------------------------------- */

//when the cart is empty and the user clicks  checout button, the user should see a message that says "Your cart is empty"

//once the user fills their cart and hit next they should be prompted to fill out their shipping information

//when the user types the wrong information in the shipping form, they should receive an error message and get a suggestion on how to fix it

// They should also have a form to choose and fill their payment information

//when the user types the wrong information in the payment form, they should receive an error message and a red border around the input field

//when the user clicks the next button, they should see a summary of their order to confirm

//when the user clicks the confirm button, they should see a message that says "Thank you for your order" and a confirmation number
