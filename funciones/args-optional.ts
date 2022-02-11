(()=>{
    // Argumentos opcionales
    // Para hacer un parametro opcional, debemos poner un '?' en antes de definir el tipo.
    // Los datos opcionales se pueden o no definir en la llamada a la función.
    // Si no se definen, se tomarán los valores por defecto.
    // Es recomendable definir los valores por defecto al final de la definición de 
    // los parametros de la función.
    const fullName = (firstName: string, lastName?:string): string => {
        return `${firstName} ${(lastName || '')}`;
    }

    const name = fullName('Elkin');

    console.log(name);
})()