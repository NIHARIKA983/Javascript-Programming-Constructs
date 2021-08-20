//adding Two Dice values
let numberOccuredOnDice1 = Math.floor(Math.random() * 6) + 1;
console.log("Number on Dice 1:"+numberOccuredOnDice1);
let numberOccuredOnDice2 = Math.floor(Math.random() * 6) + 1;
console.log("Number on Dice 2:"+numberOccuredOnDice2);
let sum = numberOccuredOnDice1 + numberOccuredOnDice2;
console.log(numberOccuredOnDice1+" + "+numberOccuredOnDice2+" = "+sum);