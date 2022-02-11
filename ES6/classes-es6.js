(()=>{
    class Avenger {
        constructor(name = "??", power = 'Desconocido') {
            this.name = name;
            this.power = power;

        }
    }

    class FlyingAvenger extends Avenger {
        constructor(name, power) {
            super(name, power);
            this.flying = true;
        }
        toString() {
            return `${this.name} ${this.power} ${this.flying}`
        }
    }

    const spiderman = new Avenger("Peter Parker", 8000);
    const falcon = new FlyingAvenger("Flacon", 20);
    console.log(spiderman);
    console.log(falcon.toString());
})()