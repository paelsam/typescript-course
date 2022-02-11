// Tuplas [tipos de datos que iran en la tupla]
(() => {

let me: [string, number, object] = ['Elkin', 16, { alive: true }];
 
console.log(me);

const hero: [string, number, boolean] = ['Dr Strange', 500, true];
hero[0] = 'Superman';
// The index 2 acept boolean types only.
// hero[2] = 1;
console.log(hero);
console.log('Hello World');

})();

