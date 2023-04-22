const Score = [0,5,10]; // например баллы за задание первое 0,второе 5, третье 10

const getAverage = (numbers) => {
  let sum = 0; 
  for (let i = 0; i < numbers.length; i += 1) { 
    sum += numbers[i];   }
  return sum / numbers.length; 
};

console.log(getAverage(Score));


    
     


