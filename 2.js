// calcula se um determinado número está presente na sequência de Fibonacci
let number = 6765;
let previousValue = 0;
let currentValue = 1;
let nextValue = 0;

for (let i = number; i >= 0; i--) {
  if (number === nextValue) {
    console.log(`O número ${number} está na sequência de Fibonacci!`)
    break;
  } 
  nextValue = previousValue + currentValue;
  previousValue = currentValue;
  currentValue = nextValue;
}