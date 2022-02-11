"use strict";
(() => {
    class User {
        constructor(name, surname, age) {
            this.name = name;
            this.surname = surname;
            this.age = age;
        }
    }
    class Gerente extends User {
        constructor(name, surname, age, department) {
            super(name, surname, age);
            this.department = department;
        }
    }
    class Empleado extends User {
    }
    const printEmpleado = (personaje) => {
        console.log(personaje.name + ' ' + personaje.surname);
    };
    const admin = new Gerente('Elkin', 'Panameño', 16, 'Sistemas');
    const james = new Empleado('James', 'Angulo', 13);
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        static getAvgAge() {
            return this.name;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 22;
    const antman = new Avenger("Antman", "Capitan", "Scott Lang");
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger LLamado!');
        }
        getFullName() {
            return `${this.name}: ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log("Constructor X-Men Llamado!");
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            this.name = name;
        }
        getFullNameXmen() {
            return super.getFullName();
        }
    }
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis(name) {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis(name);
            }
            return Apocalipsis.instance;
        }
    }
    const apocalipsis = Apocalipsis.callApocalipsis('Apocalipsis!');
    const apocalipsis2 = Apocalipsis.callApocalipsis('');
    console.log({ apocalipsis });
    console.log({ apocalipsis2 });
})();
(() => {
    const repeatWords = (sentence, word) => {
        let arrayWords = sentence.split(' ');
        let count = 0;
        for (const iWord of arrayWords) {
            if (!(iWord == word)) {
                continue;
            }
            count += 1;
        }
        return count;
    };
    const palindromicWord = (word) => {
        if (word.toLowerCase() !== word.split('').reverse().join('').toLowerCase()) {
            return false;
        }
        return true;
    };
    console.log(palindromicWord('seres'));
    console.log(repeatWords('hola mundo adios mundo', 'mundo'));
})();
//# sourceMappingURL=main.js.map