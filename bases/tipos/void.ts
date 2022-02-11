// Void: Son funciones sin valor de retorno.
(()=>{
  // Funcion normal de tipo void:
  function voidFunction():void {
  } 
  let a = voidFunction();
  console.log(a); // Devuelve Undefined

  // Funcion Flecha vacia:
  const functionVoid = ():void => {

  }
  let b = functionVoid();
  console.log(b); // Devuelve undefined
})()

