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
  }

  class User {
    private lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ email, role }: UserProps) {
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
  });

  console.log(newUser);

  interface SettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  interface UserSettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      name,
      gender,
      birthdate,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthdate });
      this.user = new User({ email, role });
      this.settings = new Settings({ workingDirectory, lastOpenFolder });
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: "/user/fernando",
    lastOpenFolder: "/user/fernando/home",
    email: "fff@email.com",
    role: "root",
    name: "Fernando",
    gender: "M",
    birthdate: new Date("1987-09-20"),
  });

  console.log(userSettings);
})();
