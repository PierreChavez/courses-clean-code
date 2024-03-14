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

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;
    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  // const person1: PersonProps = {
  //   name: "Fernando",
  //   gender: "M",
  //   birthdate: new Date("1987-09-20"),
  // };

  const newPerson = new Person({
    name: "Fernando",
    gender: "M",
    birthdate: new Date("1987-09-20"),
  });
  console.log(newPerson);

  interface UserProps {
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class User extends Person {
    private lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ email, role, name, gender, birthdate }: UserProps) {
      super({ name, gender, birthdate });
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCrendentials() {
      return true;
    }
  }

  // const user1: UserProps = {
  //   email: "email@fff.com",
  //   role: "root",
  //   name: "Fernando",
  //   gender: "M",
  //   birthdate: new Date("1987-09-20"),
  // };

  const newUser = new User({
    email: "email@fff.com",
    role: "root",
    name: "Fernando",
    gender: "M",
    birthdate: new Date("1987-09-20"),
  });

  console.log(newUser);

  interface UserSettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      name,
      gender,
      birthdate,
    }: UserSettingsProps) {
      super({ email, role, name, gender, birthdate });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }



  const userSettings = new UserSettings({
    workingDirectory: "/user/fernando",
    lastOpenFolder: "/user/fernando/home",
    email: "fff@email.com",
    role: "root",
    name: "Fernando",
    gender: "M",
    birthdate: new Date("1987-09-20")
  });

  console.log(userSettings);
})();
