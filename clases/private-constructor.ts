(()=>{    
    class Apocalipsis {
        static instance: Apocalipsis;
        
        private constructor (
            public name: string,
        ) {}
        
        // Crear objetos directamente desde la clase:
        static callApocalipsis(name: string): Apocalipsis {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis(name);
            }
            return Apocalipsis.instance;
        }
    }

    const apocalipsis = Apocalipsis.callApocalipsis('Apocalipsis!');
    const apocalipsis2 = Apocalipsis.callApocalipsis('');
    // console.log({apocalipsis});
    // console.log({apocalipsis2});
    
})()