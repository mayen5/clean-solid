(() => {

    // no aplicando el principio de responsabilidad unica

    type Gender = 'M'|'F';

    interface PersonProps{
        birthdate: Date;
        gender   : Gender;
        name     : string; 
    }

    class Person {
        public birthdate: Date;
        public gender   : Gender;
        public name     : string;

        constructor({ name, gender, birthdate } : PersonProps){
            this.birthdate = birthdate;
            this.gender    = gender;
            this.name      = name;
        }
    }

    interface UserProps{
        birthdate   : Date;
        email       : string;
        gender      : Gender;
        name        : string;
        role        : string;
    }

    class User extends Person {
        public email: string;
        public role: string;
        public lastAccess: Date;

        constructor({ birthdate, email, gender, name, role} : UserProps ){
            super({ name, gender, birthdate });
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials(){
            return true;
        }
    }

    interface UserSettingsProps {
        birthdate       : Date;
        email           : string;
        gender          : Gender;
        lastOpenFolder  : string;
        name            : string;
        role            : string;
        workingDirectory: string;
    }

    class UserSettings extends User {
        
        public lastOpenFolder  : string;
        public workingDirectory: string;

        constructor({ 
            birthdate,
            email,
            gender,
            lastOpenFolder,
            name,
            role,
            workingDirectory
        }: UserSettingsProps ){             
            super({ email, role, name, gender, birthdate });
            this.lastOpenFolder   = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }
    }
    
    const userSettings = new UserSettings({
        birthdate: new Date('1990-05-30'),
        email: 'carmelo5mayen@gmail.com',
        gender: 'M',
        lastOpenFolder: 'Repos',
        name: 'Carmelo',
        role: 'Admin',
        workingDirectory: 'C:/Repos',
    });

    console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials() });

})();