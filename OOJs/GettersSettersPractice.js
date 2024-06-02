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
    let fullName = newFullName.split(" ");
    this.firstName = fullName[0];
    this.lastName = fullName[1];
    // this.fullName = newFullName;
    console.log(this.firstName, this.lastName);
  }
}

const u = new User("Saloni", "Chouhan");
u.fullName;
u.fullName = "Subodh Galande";
