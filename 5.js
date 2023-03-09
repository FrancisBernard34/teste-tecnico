// Função que inverte os caracteres de uma string
const userInput = "Olá mundo!";
const userInputArray = [];

const stringInverter = (userInput) => {
  for (let i = 0; i < userInput.length; i++) {
    userInputArray[userInput.length - 1 - i] = userInput[i];
  }
  return userInputArray;
};

const invertedString = stringInverter(userInput);
console.log(invertedString);
