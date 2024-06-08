class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    console.log(
      `The full name of the user is: ${this.firstName} ${this.lastName}`
    );
  }

  set fullName(newFullName) {
    let [first, last] = newFullName.split(" ");
    this.firstName = first;
    this.lastName = last;
    // this.fullName = newFullName;
    console.log(this.firstName, this.lastName);
  }
}

const u = new User("Saloni", "Chouhan");
u.fullName;
u.fullName = "Subodh Galande";
