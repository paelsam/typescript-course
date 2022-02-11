(()=> {
    // Argumentos obligatorios
    const fullName = (firstName: string, lastName: string): string => {
        return `${firstName} ${lastName}`;
    }

    const name = fullName('Elkin', 'Panameño');

    console.log(name);
})()