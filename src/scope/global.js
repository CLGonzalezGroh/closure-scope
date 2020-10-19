var hello = "Hello";
var hello = "Hello +";
let world = "Hello World";
const helloWorld = "Hello World!";

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
};

anotherFunction();

const helloWorld2 = () => {
  globalVar = "I'm global";
};

helloWorld2();
console.log(globalVar);
