class UserProfile {
  constructor(username, email, birthdate) {
    if (username.length === 0) {
      console.log("Invalid username");
    } else {
      this.username = username;
    }

    if (email.includes("@")) {
      this.email = email;
    } else {
      console.log("Invalid email");
    }

    if (isNaN(new Date(this.newbirthdate))) {
      console.log("Invalid date");
    } else {
      this.birthdate = newBirthdate;
      console.log(newBirthdate);
    }
  }

  get validateDetails() {
    console.log(this.username, this.email, this.birthdate);
  }

  set validateName(name) {
    if (name.length === 0) {
      console.log("Invalid username");
    } else {
      this.username = name;
    }
  }

  set validateEmail(newEmail) {
    if (newEmail.includes("@")) {
      this.email = newEmail;
    } else {
      console.log("Invalid email");
    }
  }

  set validateBirthdate(newBirthdate) {
    // let dateobj = new Date(this.birthdate);
    if (isNaN(new Date(this.newbirthdate))) {
      console.log("Invalid date");
    } else {
      this.birthdate = newBirthdate;
      console.log(newBirthdate);
    }
  }
}

const u = new UserProfile("", "salonigmail.com", "2024/15/20"); //YYYY-MM-DD
// u.validateDetails;
// u.validateName = "";
// u.validateEmail = "salonigmail.com";
// u.validateBirthdate = "2024/15/12";
