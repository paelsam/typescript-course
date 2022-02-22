(() => {

    //! Ejercicio 1
    const repeatWords = (sentence: string, word: string): number => {
        let arrayWords = sentence.split(' ');
        let count = 0
        for (const iWord of arrayWords) {
            if (!(iWord == word)) {
                continue;
            }
            count += 1;
        }
        return count;
    }


    //! Ejercicio 2
    const palindromicWord = (word: string): boolean => {
        if (word.toLowerCase() !== word.split('').reverse().join('').toLowerCase()) {
            return false
        }
        return true;
    }

    //! Ejercicio 3
    const removeWordPattern = (sentence: string, pattern: string): string => {
        if (typeof pattern == 'string') {
            let removedWord = sentence.replace(new RegExp(pattern, "ig"), '');;
            return removedWord;
        }
        throw new Error('Ingresa un patrón valido!');
    }

    //! Ejercicio 4
    function customRandom(min: number, max: number): number {
        if (typeof min !== 'number') throw new Error('Ingresa un caracter valido');
        else if (typeof max !== 'number') throw new Error('Ingresa un caracter valido');
        return Math.round(Math.random() * (max - min + 1) + min);
    }

    //! Ejercicio 5
    const capicuaNumber = (n: number): boolean => {
        if (typeof n !== 'number') throw new Error('Ingresa un valor valido');
        if (n.toString().split('').reverse().join('') == n.toString()) return true;
        else return false;
    }

    //! Ejercicio 6
    const factorialNumber = (n: number): number => {
        if (n == 0) return 1;
        if (!n || typeof n !== 'number') throw new Error('Ingresa un numero valido');
        let factorial: number = 1;
        for (let i = 1; i <= n; i++) {
            factorial *= i;
        }
        return factorial
    }


    //! Ejercicio 7 
    const primeNumber = (n: number): string => {
        if (!n || typeof n !== 'number' || Math.sign(n) == -1) throw new Error('Ingresa un numero valido');
        if (n == 1 || n == 0) return `${n}: ${false}`;
        for (let i = 2; i < n; i++) {
            if (n % i == 0) return `${n}: ${false}`;
        }
        return `${n}: ${true}`;
    }

    //! Ejercicio 8
    const addOrOdd = (n: number): string => {
        if (!n || typeof n !== 'number') throw new Error('Ingresa un numero valido');
        if (n % 2 == 0) return `${n} es Par`;
        else return `${n} es Impar`;
    }

    //! Ejercicio 9
    function gradeConverter(grades: number, unidad: string): string {
        if (unidad == 'C' || unidad == 'c') {
            let celcius: number = (grades - 32) * (5 / 9);
            return `${grades}° fahrenheit son ${celcius}° centrigrados.`
        }
        else if (unidad == 'F' || unidad == 'f') {
            let fahrenheit: number = (grades * 1.8) + 32;
            return `${grades}° centigrados son ${fahrenheit}° fahremheit.`
        }
        throw new Error('Ingresa un valor valido');
    }


    //! Ejercicio 10
    const decimalBinarioConverter = (n: number | any, base: number) => {
        if (!n || typeof n != 'number') return "Ingresa una numero valido!";
        if (base == 10) {
            let modules: number[] = [];
            while (n != 0) {
                let modulo: number = n % 2;
                let cocient: number = parseInt((n / 2) as any);
                modules.push(modulo);
                n = cocient;
            }
            return `El numero en Binario es: ${modules.join('')}`;
        }
        else if (base == 2) {
            let decimal: number = 0;
            n = n.toString().split('').reverse();
            for (let i = 0; i < n.length; i++) {
                let result: number = parseInt(n[i]) * (2 ** i);
                decimal += result;
            }
            return `El numero en Decimal es: ${decimal}`;;
        }
        return "Ingresa una Opcion Valida!";
    }

    //! Ejercicio 11
    const calculateDiscounts = (price: number, discount: number): string => {
        if (typeof price != 'number') return 'Ingresa un precio válido!';
        if (typeof discount != 'number') return 'Ingresa un descuento válido!';
        let result: number = price - ((discount / 100) * price);
        return `El monto final de $${price} al aplicarle el ${discount}% de descuento es: $${result}`;
    }

    //! Ejercicio 12 
    const calculateDates = (fecha: Date) => {
        let yearNow = new Date().getFullYear();
        return `Han pasado ${yearNow - fecha.getFullYear()} años. (Año ${yearNow})`;
    }

    //! Ejercicio 13 
    const countLetters = (sentence: string) => {
        let vocals: string[] = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'],
            consonants: string[] = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'ñ', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'],
            countVocals: number = 0,
            countConsonants: number = 0;
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
    }

    //? Otra Alternativa 
    const contarLetras = (sentence: string): string => {
        if (typeof sentence != 'string') throw Error('Solo puedes ingresar texto.');
        let vocales: number = sentence.replace(/[^aeiouÁÉÍÓÚñáéíóúÑ]/ig, '').length;
        let consonantes: number = sentence.replace(/[^bcdfghjklmnñpqrstvwxyz]/ig, '').length
        return `Vocales ${vocales} - Consonantes: ${consonantes}`;
    }

    //! Ejercicio 14 

    function nameVerication(name: string) {
        let catpcha = /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/gm
        return catpcha.test(name) ? 'Nombre Válido' : "Nombre Inválido";
    }


    //! Ejercicio 15

    const validarEmail = (email: string): string => {
        let catpcha = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/g;
        return catpcha.test(email) ? "Email Valido" : "Email NO es Valido";
    }

    //! Ejercicio 16

    const potenciasArray = (array: number[]): number[] => {
        return array.map((i) => {
            return i ** 2;
        })
    }

    //! Ejercicio 17

    const maxMinNumbers = (array: number[]): number[] => {
        return [Math.max(...array), Math.min(...array)];
    }

    //! Ejercicio 18
    type EvenAndOdd = {
        even: number[];
        odd: number[];
    }

    const evenOdd = (array: number[]): object => {
        let evenOddObject: EvenAndOdd = {
            even: [],
            odd: []
        }
        for (let i = 0; i < array.length; i++) {
            if (i % 2 == 0) { evenOddObject.odd.push(array[i]); }
            else { evenOddObject.even.push(array[i]); }
        }
        return evenOddObject;
    }

    //! Ejercicio 19

    const ascDesSort = (array: number[]): object => {
        return {
            ascendente: array.map(index => index).sort(),
            descendente: array.map(index => index).sort().reverse(),
        }
    }

    //! Ejercicio 20 

    const removeWords = (array: any[]): any[] => {
        const unicos: any[] = [];
        for (let i = 0; i < array.length; i++) {
            const elemento = array[i];
            if (!unicos.includes(array[i])) {
                unicos.push(elemento);
            }
        }
        return unicos;
    }


    //! Ejercicio 21

    const promedioArrays = (array: number[]): number => {
        let promedio: number = 0;
        for (let i = 0; i < array.length; i++) {
            promedio += array[i];
        }
        return promedio / array.length;
    }



    // console.log(promedioArrays([9,8,7,6,5,4,3,2,1,0]))
    // console.log(removeWords(["x", 10, "x", 2, "10", 10, true, true]))
    // console.log(ascDesSort([7, 5, 7, 8, 6]));
    // console.log(evenOdd([1,2,3,4,5,25,7,8,9,0]))
    // console.log(maxMinNumbers([1, 4, 5, 99, -60]))
    // console.log(potenciasArray([1,4,5]));
    // console.log(validarEmail('elkinsamir643@gmail.com'));
    // console.log(nameVerication('Elkin Panameño'));
    // console.log(contarLetras('Élkin'));
    // console.log(countLetters('Ñoño'));
    // console.log(calculateDates(new Date(2005, 7, 31)));
    // console.log(calculateDiscounts(100, 2));
    // console.log(decimalBinarioConverter(2,10));    
    // console.log(gradeConverter(32, 'C'));
    // console.log(addOrOdd(22));
    // console.log(primeNumber(7));
    // console.log(factorialNumber(0));
    // console.log(capicuaNumber(2002));
    // console.log(customRandom(501, 600));
    // console.log(removeWordPattern("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));
    // console.log(palindromicWord('seres'));
    // console.log(repeatWords('hola mundo adios mundo', 'mundo'));



})()