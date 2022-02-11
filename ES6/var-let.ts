(() => {
    // NUNCA USAR VAR 
    // LET FOREVER!

    let letRules = true;

    function getName(): void {
        console.log('Viejo getName');
    }   

    // Todo texto queda al revés:
    const reverseText = (text: string): string => {
        const reversedText: string = text.split('').reverse().join('');
        return reversedText;
    } 
    // console.log(reverseText('Hola Mundo'));
    


    // getName = (): void => { console.log('Nuevo getName'); }
    // getName();
})()