const myNumbers = [55,66,63,57,74]
let sum = 0;
for (let i = 0; i < myNumbers.length; i++) {
    sum = sum + myNumbers[i];
}
console.log(sum);
const person = [
    {name:'Lela', age:'22',address:'Davitaia st'},
    {name:'Sandro', age:'25', address:'Pekini ave'},
    {name:'Lile',age:'18',address:'Kazbegi ave'}

];
console.log(person)
console.log ('My name is',person[0].name,',My age is',person[0].age,',My address is',person[0].address);
if (person[0].age < 19) {
    console.log('I am teenager');
  } 
else {
    console.log('I am adult');
  }