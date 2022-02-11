(()=>{
  const elkin:string = 'Elkin Panameño';
  const james:string = 'James Angulo';
  const camila:string = 'Camilia';

  let age = 16;

  console.log(james.toUpperCase());
  console.log(`I'm ${elkin}: ${age.toString()}`);
  console.log(james[15]?.toUpperCase() || 'Indexacion fuera de los limites.');
  console.log(void 0) // Undefined
})()
