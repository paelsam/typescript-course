const fullName = (firstName: string, ...restNames: string[]): string => {
    return `${firstName} ${restNames.join(' ')}`;
}

const elkin = fullName('Elkin', 'Samir', 'Angulo', 'Panameño');

console.log({elkin})