// create an objext labeled customer and add the following key value pairs
/* 

keys ============>>>	values
firstName ----------->	"jake"
lastName----------->"smith"
email----------->"jaekSmih!aol.com"
phone----------->undefined
zipCode----------->"631"
favoriteFlavors----------->32
cupSize----------->"medium"
favoriteStore----------->"Target"
firstVisit----------->false

*/

const customer = {
  firstName: "jake",
  lastName: "smith",
  email: "jaekSmih!aol.com",
  phone: undefined,
  zipCode: "631",
  favoriteFlavors: 32,
  cupSize: "medium",
  favoriteStore: "Target",
  firstVisit: false,
};

//  correct mistakes made in the following objects
/* 
email: "jaekSmih!aol.com"  should be "jak3smith1992@email.com"
phone: undefined should be 3195551234
zipCode: "631" should be "63132"
favoriteFlavors: 32 should be "coffee", "strawberry", "matcha"
*/

// we can use customer.propertyName to access the value of a property
customer.email = "jak3smith1992@email.com";
customer.phone = 3195551234;
customer.zipCode = "63132";
customer.favoriteFlavors = ["coffee", "strawberry", "matcha"];

// now we will need to remove a couple of properties from the object
// we do that by using the delete keyword followed by the object.propertyName
/* 
delete zipcode and favoriteStore
*/
delete customer.zipCode;
delete customer.favoriteStore;

// now we will add a new property to the object per management request
/* key value pairs
keys ============>>>	values
toppings ----------->	"chocolate sprinkles", "wafer straws", "gummy bears"
futureFlavors----------->"mango"
todaysPurchaseCost----------->5.32

*/
customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;

// print key value pairs to the console
// console.log(Object.keys(customer));
console.table(customer);

/* 

-----------------console.log(Object.keys(customer))-----------------
[
  'firstName',
  'lastName',
  'email',
  'phone',
  'favoriteFlavors',
  'cupSize',
  'firstVisit',
  'toppings',
  'futureFlavors',
  'todaysPurchaseCost'
]
------------------console.table(Object.keys(customer));------------------
┌─────────┬──────────────────────┐
│ (index) │        Values        │
├─────────┼──────────────────────┤
│    0    │     'firstName'      │
│    1    │      'lastName'      │
│    2    │       'email'        │
│    3    │       'phone'        │
│    4    │  'favoriteFlavors'   │
│    5    │      'cupSize'       │
│    6    │     'firstVisit'     │
│    7    │      'toppings'      │
│    8    │   'futureFlavors'    │
│    9    │ 'todaysPurchaseCost' │
└─────────┴──────────────────────┘






*/
