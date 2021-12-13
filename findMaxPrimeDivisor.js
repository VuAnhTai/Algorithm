function findMaxPrimeDivisor(number) {
  if (number === 1) {
    return 1;
  }
  
  let divisor = 2;
  while(number > 1){
      if(number % divisor === 0){ 
          number /= divisor;
      } else {
          divisor++;
      }
  }

  return divisor
}

console.log(findMaxPrimeDivisor(1));
