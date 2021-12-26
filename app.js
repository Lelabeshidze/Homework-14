const myNumbers = [55,66,63,57,74]
let sum = 0;
for (let i = 0; i < myNumbers.length; i++) {
    sum += myNumbers[i];
}
console.log(sum);
const person = [
    {name:'Lela', age:'22',address:'Tbilisi'}
];
console.log ('My name is',person[0].name,',My age is',person[0].age,',My address is',person[0].address);
if (person[0].age > 19) {
    console.log('I am adult');
  } 
else {
    console.log('I am teenager');
  }