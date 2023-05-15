const users = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 43, occupation: "teacher" },
  { name: "Albert", age: 76, occupation: "programmer" },
  { name: "Adam", age: 47, occupation: "teacher" },
  { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
  //   grab with one selector querySelector,getElementsByClassName,getElementById
  const root = document.getElementById("root");
  //   creste an h1 element using createElement method
  //   add text to the h1 element using innerText property
  const h1 = document.createElement("h1");
  //   append the h1 element to the root element using appendChild method
  h1.innerText = "Freelancers";
  root.appendChild(h1);
  //   create a ul element using createElement method
  //   grab  the root element using querySelector
  const ul = document.createElement("ul");
  // loop through the users array
  for (let i = 0; i < users.length; i++) {
    // create a li element using createElement method
    const li = document.createElement("li");
    // add text to the li element using innerText property
    li.innerText =
      "Name: " +
      users[i].name +
      " Age: " +
      users[i].age +
      " Occupation: " +
      users[i].occupation;
    // append the li element to the ul element using appendChild method

    ul.appendChild(li);
  }
  root.appendChild(ul);
}

//call the main function
main();
