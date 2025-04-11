//task1
if ('0') {
  alert('Hello');
}
// יהיה ALERT

/*  ---------------------*/
// task2
let num1 = prompt('what is the official name of javascript:');
if (num1 == 'ECMAScript') {
  alert('Correct!');
} else {
  alert('dont know');
}

/*  ---------------------*/
//task3

let score = 75;
let grade;

grade =
  score >= 90
    ? 'A'
    : score >= 80
    ? 'B'
    : score >= 70
    ? 'C'
    : score >= 60
    ? 'D'
    : 'F';

console.log('הציון הוא:', grade);

/*  ---------------------*/
//task4

let num = prompt('num:');
if (num > 0) {
  alert('גדול מ 0 ');
} else if (num < 0) {
  alert('קטן מ 0 ');
} else {
  alert('שווה  0 ');
}

/*  ---------------------*/
//task5

let result;
let a = (b = 2);
result = a + b < 4 ? 'Not enough' : (result = 'A lot');

/*  ---------------------*/
//task6
let message;
let login = 'Employee';
message =
  login == 'Employee'
    ? 'Hello'
    : login == 'Director'
    ? 'Hello'
    : login == ''
    ? 'No login'
    : '';

/*  ---------------------*/
//task7

console.log(false || 'sdf'); //sdf

console.log(false && ''); //false

console.log(true || ''); //true

console.log(true && ''); //''

console.log(undefined || null); //null

console.log(undefined || 0 || null); //null

console.log(undefined && 0 && null); //undefined

console.log(1 || 0); //1

console.log(null || 1); // 1

console.log(null || 0 || 1); // 1
