const butters = {
  firstName: "Butters",
  lastName: "Cluckly",
  greet: function () {
    return `Hello ${this.firstName} ${this.lastName}`;
  },
};

const fluffy = {
  firstName: "Fluffy",
  lastName: "Meowson",
};

function greetFluffy() {
  // Invoke the greet method but instead of returning "Hello Butters Cluckly", return "Hello Fluffy Meowson". Do not modify the fluffy object above.
  //   2 ways to print this
  //  1st one is below using bind
  let unboundbutters = butters.greet;
  let boundedbutters = unboundbutters.bind(fluffy);
  console.log(boundedbutters());

  //   2nd way using call
  console.log(butters.greet.call(fluffy));
}

greetFluffy();
