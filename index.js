'use strict';

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} yeard old ${job}!`;
// console.log(jonasNew);

// const names = ['Anton', 'Julia', 'Milton', 'Adrian'];

// console.log(names[0]);

// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// console.log('jonas');
// console.log(23);

// let firstName = 'jonas';
// console.log(firstName);

// const age = 19;
// const isOldEnough = age >= 18;

// if (age >= 18) {
//   console.log('Sarah can start driving license😜');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young wait another ${yearsLeft} years :)`);
// }

// let century;
// const birthYear = 1991;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

// const age = 18;
// if (age === 18) console.log('You just became an adult!');

let age = '20';
if (age == 20) {
  console.log('happy');
} else {
  console.log('Not happy'); // == does type coercion and converts the string '20' to a number 20 so they will be equal and will result in a truthy value.
}

if (age === 20) {
  console.log('Happy');
} else {
  console.log('Not happy, and no typecoercion'); // === does not to type coercion and checks if its the same.
}
