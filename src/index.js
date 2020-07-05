// Fetch
// Arrays / Objects
// Functions

/*
  1. I fetch
    2. I wait for the fetch to end
      3. --> Ok it worked --> .then(res => res.json()) **res.json() : Promise, we have to wait for its end
            --> We add another then, that will get the result of .json() when it is finished
      3. --> Didnt work --> .catch(e => cosnole.log(e))
*/

// Create a function, ES6 arrow, it needs a url parameter,
// paste your fetch inside of the function, with the dynamic url
const myFunction = url => {
  // Fetch on the api, console.log the result
  fetch(url) // Do the fetch action
    .then(res => res.json()) // Convert the response to a javascript object
    // .json() --> Promise, so we need to add .then()
    .then(finalResult => console.log(womanFilter(finalResult))) // Log the result of the conversion
    .catch(e => console.log(e)); // If there is an error, its is caught here
};

// Create another function, that takes in an object as a parameter,
//filter the results array, to only have female people, return the object with the modified array

const womanFilter = anObject => {
  anObject.results = anObject.results.filter(
    element => element.gender === "female"
  );
  return anObject;
};

myFunction("https://randomuser.me/api/?results=10");
