// Nunca USAR Any:

(()=>{
  let cualquiera: any = 123;
  let existe;
  let power;
  cualquiera = {nombre: 'Elkin'};
  cualquiera = 'a';
  console.log(existe);
  console.log(power);
  // Casting: Cambiar el tipo de dato a otro:
  console.log((cualquiera as string).toUpperCase());
  console.log((<string>cualquiera).toLowerCase())

})()
