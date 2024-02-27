//Q1.
  for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

//Q2.
function sum(a, b) {
  return a + b;
}
console.log(sum(1, '2'));

//Q3.
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);

//Q4.
console.log('I want pizza'[0]);

// Q5.
console.log([0] == false);
if ([0]) {
  console.log("I'm True");
} else {
  console.log("I'm False");
} 
