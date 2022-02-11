(()=>{
    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
        fullInformation?: () => string;
    }

    // Una variable puede tener nuestro tipo personalizado: 
    // En este caso estamos añadiendo nuestro tipo Hero como un tipo disponible
    // A usar en esta variable.
    let myCustomVariable: (string | number | Hero) = 'Elkin';
    console.log(typeof myCustomVariable);
    myCustomVariable = 10;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Elkin',
        age: 16,
        powers: ['Nothing']
    }
    console.log(typeof myCustomVariable);
    
})()