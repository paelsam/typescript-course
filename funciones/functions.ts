(()=>{
    const hero: string = 'Superman';

    function returnHero():string {
        return hero;
    }

    // Es importante definir que retorna:
    const turnOnBatiSignal = ():string => {
        return 'Bati Signal Activated!';
    }

    console.log(typeof(turnOnBatiSignal));
})()