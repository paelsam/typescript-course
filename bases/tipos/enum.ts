// Enumeraciones: Sirven para definir un conjunto de valores que pueden ser usados en una sola variable.

(()=>{
  enum AudioLevel {
    min = 1,
    medium = 5,
    max = 10
  }
  
  let currentAudio = AudioLevel.medium;

  console.log(AudioLevel);
  console.log(currentAudio);
})()

