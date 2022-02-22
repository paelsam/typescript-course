

class Movies {

    // Variables y métodos estáticos:
    static idValidation: RegExp = new RegExp('^[a-z]{2}[0-9]{7}$', 'g'); // Expresion regular para validar el titulo.
    static generosAceptados = (): string[] => {
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime",
            "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History",
            "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi",
            "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }
    static limiteCaracteres = (length: number, propiedad: string) => {
        if (!(propiedad.length <= length)) {
            throw new Error(`El titulo debe tener menos de ${length} caracteres.`);
        }
        return true;
    }
    static verificarArray = (propiedad: string[]) => {
        if (!(Array.isArray(propiedad))) {
            throw new Error('Recuerda que los países y géneros van entre llaves "[]" y estan separados por comas ",".');
        }
        return true;
    }
    // Fin de las variable y métodos estaticos.

    constructor(
        public id: string,
        public titulo: string,
        public director: string,
        public yearEstreno: number,
        public pais: string[],
        public generos: string[],
        public calificacion: number,
    ) {
        if (
            this.id == undefined ||
            this.titulo == undefined ||
            this.director == undefined ||
            this.yearEstreno == undefined ||
            this.pais == undefined ||
            this.generos == undefined ||
            this.calificacion == undefined
        ) throw new Error('TODOS los datos son obligatorios.');

        if (!(Movies.idValidation.test(this.id))) throw new Error('ID incorrecto.');
        Movies.limiteCaracteres(100, this.titulo);
        Movies.limiteCaracteres(50, this.director);
        Movies.verificarArray(this.pais);
        Movies.verificarArray(this.generos);
        if (this.yearEstreno.toString().length !== 4) throw new Error('Ingresa una fecha válida.');
        if (!(this.calificacion >= 0 && this.calificacion <= 10)) throw new Error('Calificacion incorrecta. Debe ser entre 0 y 10.');

        this.generos.forEach(index => {
            if (!(Movies.generosAceptados().includes(index))) {
                throw new Error(`El genero ${index} no se encuentra entre los disponibles.`);
            }
        });
    }
    toString(): string {
        return `
        FICHA TECNICA: 

        ID: ${this.id}
        Título: ${this.titulo}
        Director: ${this.director}
        Fecha: ${this.yearEstreno}
        País(es): ${this.pais.join(', ')}
        Géneros: ${this.generos.join(', ')}
        Calificación: ${this.calificacion}
        `
    }
}

let matrix = new Movies("vi7961157", 'Moon Knight (2022)', 'Doug Moench', 2022, ['EEUU'], ["Action", "Drama", "Horror"], 8.7);
console.log(matrix.toString());