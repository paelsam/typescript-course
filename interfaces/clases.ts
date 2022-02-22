(()=>{

    interface Avenger {
        name: string;
        realname: string;
        getFullname(): string;
    }

    interface Human {
        age: number;
        isAlive: boolean;
    }

    class Ironman implements Avenger, Human {
        constructor(
            public name: string,
            public realname: string,
            public age: number,
            public isAlive: boolean
        ) {}
        getFullname(): string {
            return `${this.name}: ${this.realname}`
        }
    }
})()