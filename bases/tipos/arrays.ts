(()=>{
  // Esto no es recomendable:
  // let myArray: (number | string | boolean)[] = [1,2,'1','2'];
  
  // Comunmente usamos los Arrays con solo un tipo de dato:
  let myArray: number[] = [1,2,3,4,5,6,7,8,9,0];

  const names = ['Elkin', 'Nando', 'James', 'Shary', 'Felisa'];
  names.forEach(i => console.log(i.toUpperCase()))

  myArray.push(10);

  console.log(myArray);
})()
