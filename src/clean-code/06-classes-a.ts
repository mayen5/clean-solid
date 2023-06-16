(() => {

    // no aplicando el principio de responsabilidad unica

    type Gender = 'M'|'F';
    class Person {
        constructor(
            public name: string, 
            public gender: Gender, 
            public birthdate: Date
        ){}
    }

    class User extends Person {
        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birhdate: Date,
        ){
            super(name, gender, birhdate);
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder  : string,
            email                  : string,
            role                   : string,
            name                   : string,
            gender                 : Gender,
            birthdate              : Date,
        ){             
            super(email, role, name, gender, birthdate);
        }
    }
    
    const userSettings = new UserSettings(
        'C:/Repos',
        'Repos',
        'carmelo5mayen@gmail.com',
        'Admin',
        'Carmelo',
        'M',
        new Date('1990-05-30')
    );

    console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials() });

})();