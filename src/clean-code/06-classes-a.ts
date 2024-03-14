(() => {
  type Gender = "M" | "F";

  // class Person {

  //     private name: string;
  //     private gender: Gender;
  //     private birthDate:  Date;

  //     constructor(name: string, gender: Gender, birthDate: Date){
  //         this.name = name;
  //         this.gender = gender;
  //         this.birthDate = birthDate;
  //     }
  // }

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  const newPerson = new Person("Fernando", "M", new Date("1987-09-20"));
  console.log(newPerson);

  class User extends Person {
    private lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      public name: string,
      public gender: Gender,
      birthDate: Date
    ) {
      super(name, gender, birthDate);
      this.lastAccess = new Date();
    }

    checkCrendentials() {
      return true;
    }
  }

  const newUser = new User(
    "email@fff.com",
    "root",
    "Fernando",
    "M",
    new Date("1987-09-20")
  );

  console.log(newUser);

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthDate: Date
    ) {
      super(email, role, name, gender, birthDate);
    }
  }

  const userSettings = new UserSettings(
    "/user/fernando",
    "/user/fernando/home",
    "fff@email.com",
    "root",
    "Fernando",
    "M",
    new Date("1987-09-20")
  );


  console.log(userSettings);
})();
