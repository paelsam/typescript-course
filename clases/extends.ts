(()=>{
    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ){
            console.log('Constructor Avenger LLamado!');
        }

        protected getFullName() {
            return `${this.name}: ${this.realName}`;
        }
    }

    class Xmen extends Avenger {
        constructor (
            name: string, 
            realName: string, 
            public isMutant: boolean
        ) {
            super(name, realName);
            console.log("Constructor X-Men Llamado!");
        }
        get fullName() {
            return `${this.name} - ${this.realName}`
        }

        set fullName(name: string) {
            this.name = name;
        }

        getFullNameXmen() {
            return super.getFullName(); 
        }
    }

    


    // const wolverine = new Xmen('Wolverine', 'Logan', true);
    // wolverine.fullName = "Elkin"
    // console.log(wolverine.fullName);
})()