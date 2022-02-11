type Avenger = {
    name: string,
    power: number,
}

const spiderman: Avenger = {
    name: 'Tom Holland',
    power: 5000
}

const acuaman: Avenger = {
    name: 'Jason Momoa',
    power: 3000
}

const ironman: Avenger = {
    name: 'Robert Jr.',
    power: 10000
}

const avengers = [spiderman, acuaman, ironman];

for (const avenger of avengers) {
    console.log(avenger.name);
}
