(() => {
    type Avengers = {
        spiderman: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers: Avengers = {
        spiderman: 'Tom Holland',
        ironman: 'Rober Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 8000
    }

    // const { poder, vision } = avengers;
    // console.log(poder.toFixed(), vision.toUpperCase());

    const printAvenger = ({ironman, ...rest}: Avengers) => {
        console.log(rest.spiderman, ironman );
    }

    const avengersArray: string[] = ['Ironman', 'Spiderman', 'Hawkeye'];
    const conexion: (string | boolean)[] = ['127.0.0.1', 'postgres', 'admin', true];

    const [host, user, password, online] = conexion;
    const [, spider ,] = avengersArray;

})()