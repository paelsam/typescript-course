(() => {
    abstract class User {
        constructor(
            public name: string,
            public surname: string,
            protected age: number,
        ) { }
    }

    class Gerente extends User {
        constructor (
            name: string,
            surname: string,
            age: number,
            public department: string
        ) {
            super(name, surname, age);
        }
    }

    class Empleado extends User { 

    }

    const printEmpleado = (personaje: Empleado) => {
        console.log(personaje.name + ' ' + personaje.surname);
    }


    const admin: Gerente = new Gerente('Elkin', 'Panameño', 16, 'Sistemas');
    const james: Empleado = new Empleado('James', 'Angulo', 13);

    // printEmpleado(james);
})()