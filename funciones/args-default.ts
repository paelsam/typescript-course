(()=>{
    // Define una función con un parámetro booleano con valor por defecto
    const fullName = (firstName: string, lastName?:string, upper:boolean = false): string => {
        if (upper) {
            return `${firstName} ${(lastName || '')}`.toUpperCase();
        } else {
            return `${firstName} ${(lastName || '')}`; 
        }
    }

    const name = fullName('Elkin', 'Stark', true);

    console.log(name);
})()