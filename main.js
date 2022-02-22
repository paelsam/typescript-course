"use strict";
(() => {
    const repeatWords = (sentence, word) => {
        let arrayWords = sentence.split(' ');
        let count = 0;
        for (const iWord of arrayWords) {
            if (!(iWord == word)) {
                continue;
            }
            count += 1;
        }
        return count;
    };
    const palindromicWord = (word) => {
        if (word.toLowerCase() !== word.split('').reverse().join('').toLowerCase()) {
            return false;
        }
        return true;
    };
    const removeWordPattern = (sentence, pattern) => {
        if (typeof pattern == 'string') {
            let removedWord = sentence.replace(new RegExp(pattern, "ig"), '');
            ;
            return removedWord;
        }
        throw new Error('Ingresa un patrón valido!');
    };
    function customRandom(min, max) {
        if (typeof min !== 'number')
            throw new Error('Ingresa un caracter valido');
        else if (typeof max !== 'number')
            throw new Error('Ingresa un caracter valido');
        return Math.round(Math.random() * (max - min + 1) + min);
    }
    const capicuaNumber = (n) => {
        if (typeof n !== 'number')
            throw new Error('Ingresa un valor valido');
        if (n.toString().split('').reverse().join('') == n.toString())
            return true;
        else
            return false;
    };
    const factorialNumber = (n) => {
        if (n == 0)
            return 1;
        if (!n || typeof n !== 'number')
            throw new Error('Ingresa un numero valido');
        let factorial = 1;
        for (let i = 1; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
    };
    const primeNumber = (n) => {
        if (!n || typeof n !== 'number' || Math.sign(n) == -1)
            throw new Error('Ingresa un numero valido');
        if (n == 1 || n == 0)
            return `${n}: ${false}`;
        for (let i = 2; i < n; i++) {
            if (n % i == 0)
                return `${n}: ${false}`;
        }
        return `${n}: ${true}`;
    };
    const addOrOdd = (n) => {
        if (!n || typeof n !== 'number')
            throw new Error('Ingresa un numero valido');
        if (n % 2 == 0)
            return `${n} es Par`;
        else
            return `${n} es Impar`;
    };
    function gradeConverter(grades, unidad) {
        if (unidad == 'C' || unidad == 'c') {
            let celcius = (grades - 32) * (5 / 9);
            return `${grades}° fahrenheit son ${celcius}° centrigrados.`;
        }
        else if (unidad == 'F' || unidad == 'f') {
            let fahrenheit = (grades * 1.8) + 32;
            return `${grades}° centigrados son ${fahrenheit}° fahremheit.`;
        }
        throw new Error('Ingresa un valor valido');
    }
    const decimalBinarioConverter = (n, base) => {
        if (!n || typeof n != 'number')
            return "Ingresa una numero valido!";
        if (base == 10) {
            let modules = [];
            while (n != 0) {
                let modulo = n % 2;
                let cocient = parseInt((n / 2));
                modules.push(modulo);
                n = cocient;
            }
            return `El numero en Binario es: ${modules.join('')}`;
        }
        else if (base == 2) {
            let decimal = 0;
            n = n.toString().split('').reverse();
            for (let i = 0; i < n.length; i++) {
                let result = parseInt(n[i]) * (2 ** i);
                decimal += result;
            }
            return `El numero en Decimal es: ${decimal}`;
            ;
        }
        return "Ingresa una Opcion Valida!";
    };
    const calculateDiscounts = (price, discount) => {
        if (typeof price != 'number')
            return 'Ingresa un precio válido!';
        if (typeof discount != 'number')
            return 'Ingresa un descuento válido!';
        let result = price - ((discount / 100) * price);
        return `El monto final de $${price} al aplicarle el ${discount}% de descuento es: $${result}`;
    };
    const calculateDates = (fecha) => {
        let yearNow = new Date().getFullYear();
        return `Han pasado ${yearNow - fecha.getFullYear()} años. (Año ${yearNow})`;
    };
    const countLetters = (sentence) => {
        let vocals = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'], consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'ñ', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'], countVocals = 0, countConsonants = 0;
        for (const i of sentence.toLowerCase()) {
            for (const j of vocals) {
                if (i == j) {
                    countVocals += 1;
                }
            }
            for (const k of consonants) {
                if (i == k) {
                    countConsonants += 1;
                }
            }
        }
        return `Vocales ${countVocals} - Consonantes: ${countConsonants}`;
    };
    const contarLetras = (sentence) => {
        if (typeof sentence != 'string')
            throw Error('Solo puedes ingresar texto.');
        let vocales = sentence.replace(/[^aeiouÁÉÍÓÚñáéíóúÑ]/ig, '').length;
        let consonantes = sentence.replace(/[^bcdfghjklmnñpqrstvwxyz]/ig, '').length;
        return `Vocales ${vocales} - Consonantes: ${consonantes}`;
    };
    function nameVerication(name) {
        let catpcha = /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/gm;
        return catpcha.test(name) ? 'Nombre Válido' : "Nombre Inválido";
    }
    const validarEmail = (email) => {
        let catpcha = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/g;
        return catpcha.test(email) ? "Email Valido" : "Email NO es Valido";
    };
    const potenciasArray = (array) => {
        return array.map((i) => {
            return i ** 2;
        });
    };
    const maxMinNumbers = (array) => {
        return [Math.max(...array), Math.min(...array)];
    };
    const evenOdd = (array) => {
        let evenOddObject = {
            even: [],
            odd: []
        };
        for (let i = 0; i < array.length; i++) {
            if (i % 2 == 0) {
                evenOddObject.odd.push(array[i]);
            }
            else {
                evenOddObject.even.push(array[i]);
            }
        }
        return evenOddObject;
    };
    const ascDesSort = (array) => {
        return {
            ascendente: array.map(index => index).sort(),
            descendente: array.map(index => index).sort().reverse(),
        };
    };
    const removeWords = (array) => {
        const unicos = [];
        for (let i = 0; i < array.length; i++) {
            const elemento = array[i];
            if (!unicos.includes(array[i])) {
                unicos.push(elemento);
            }
        }
        return unicos;
    };
    const promedioArrays = (array) => {
        let promedio = 0;
        for (let i = 0; i < array.length; i++) {
            promedio += array[i];
        }
        return promedio / array.length;
    };
})();
class Movies {
    constructor(id, titulo, director, yearEstreno, pais, generos, calificacion) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.yearEstreno = yearEstreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;
        if (this.id == undefined ||
            this.titulo == undefined ||
            this.director == undefined ||
            this.yearEstreno == undefined ||
            this.pais == undefined ||
            this.generos == undefined ||
            this.calificacion == undefined)
            throw new Error('TODOS los datos son obligatorios.');
        if (!(Movies.idValidation.test(this.id)))
            throw new Error('ID incorrecto.');
        Movies.limiteCaracteres(100, this.titulo);
        Movies.limiteCaracteres(50, this.director);
        Movies.verificarArray(this.pais);
        Movies.verificarArray(this.generos);
        if (this.yearEstreno.toString().length !== 4)
            throw new Error('Ingresa una fecha válida.');
        if (!(this.calificacion >= 0 && this.calificacion <= 10))
            throw new Error('Calificacion incorrecta. Debe ser entre 0 y 10.');
        this.generos.forEach(index => {
            if (!(Movies.generosAceptados().includes(index))) {
                throw new Error(`El genero ${index} no se encuentra entre los disponibles.`);
            }
        });
    }
    toString() {
        return `
        FICHA TECNICA: 

        ID: ${this.id}
        Título: ${this.titulo}
        Director: ${this.director}
        Fecha: ${this.yearEstreno}
        País(es): ${this.pais.join(', ')}
        Géneros: ${this.generos.join(', ')}
        Calificación: ${this.calificacion}
        `;
    }
}
Movies.idValidation = new RegExp('^[a-z]{2}[0-9]{7}$', 'g');
Movies.generosAceptados = () => {
    return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime",
        "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History",
        "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi",
        "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
};
Movies.limiteCaracteres = (length, propiedad) => {
    if (!(propiedad.length <= length)) {
        throw new Error(`El titulo debe tener menos de ${length} caracteres.`);
    }
    return true;
};
Movies.verificarArray = (propiedad) => {
    if (!(Array.isArray(propiedad))) {
        throw new Error('Recuerda que los países y géneros van entre llaves "[]" y estan separados por comas ",".');
    }
    return true;
};
let matrix = new Movies("vi7961157", 'Moon Knight (2022)', 'Doug Moench', 2022, ['EEUU'], ["Action", "Drama", "Horror"], 8.7);
console.log(matrix.toString());
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log("...... gogogo!!!");
    }
};
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    constructor(nombre, edad, sexo, estadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
    }
    imprimirBio() {
        return undefined;
    }
}
//# sourceMappingURL=main.js.map