(()=>{
    class Avenger {
        // Niveles de acceso

       /*  
        // Propiedades privadas:
        private name: string;
        // Propiedades publicas:
        private team: string;
        public realName?: string;
        */
       
       // Constructor "Rara" en TypeScript:
       /* constructor(name: string, team:string, realName?: string) {
           this.name = name;
           this.team = team;
           this.realName = realName;
        } */

        static avgAge: number = 22; 
        static getAvgAge(): string {
            // No llamara a la propiedad name del constructor
            // Si no que llamara al nombre de la clase.
            return this.name;
        }

        // Forma normal de definir propiedades en el Constructor en TypeScript:
        constructor(
                private name: string, 
                private team:string, 
                public realName?: string
        ) {}

        public bio(): string {
            return `${this.name} (${this.team})`
        }
    }

    const antman: Avenger = new Avenger("Antman", "Capitan", "Scott Lang");
    // console.log(antman.bio());
    // console.log(Avenger.getAvgAge());
})()