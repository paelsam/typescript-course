(() => {
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

   const palindromicWord = (word: string): boolean => {
        if (word.toLowerCase() !== word.split('').reverse().join('').toLowerCase()) {
            return false
        } 
        return true;
   }

    console.log(palindromicWord('seres'));   
    console.log(repeatWords('hola mundo adios mundo', 'mundo'));



})()