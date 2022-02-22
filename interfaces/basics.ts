(()=> {
    interface Hero {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }



    let flash: Hero = {
        name: 'Flash',
        age: 24,
        powers: ['Speed', 'Travel in the time'],
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