(()=>{
    // Objetos Literales:
    let flash: {name: string, age: number, powers: (string[]), getName?: () => string} = {
        name: 'Flash',
        age: 24,
        powers: ['Speed', 'Travel in the time'],
    }; 
    console.log(flash);
    
    // Crear un tipo: 
    flash = {
        name: 'Elkin',
        age: 16,
        powers: ['Nothing'], 
        getName() {
            return this.name;
        }
    }

    // console.log(flash.getName())

})()