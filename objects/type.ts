(()=>{
    // Creamos un tipo 
    // Si algun momento tengo que cambiar el tipo de una propiedad, puedo hacerlo 
    // directamente desde la creacion de mi tipo. 
    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
        fullInformation?: () => string;
    }



    let flash: Hero = {
        name: 'Flash',
        age: 24,
        powers: ['Speed', 'Travel in the time'],
        fullInformation: () => {
            return `${flash.name} ${flash.age} ${(flash.powers).join('/')}`
        }
    }; 
    
    let sammy: Hero = {
        name: 'Elkin',
        age: 16,
        powers: ['Nothing'], 
        getName() {
            return this.name;
        }
    }
})()