const helloWorld = () => {
  const hello = "Hello World";
  console.log(hello);
};

helloWorld();
//console.log(hello); no funciona. hello no esta definida

var scope = "I'm gobal";

const functionScope = () => {
  var scope = "I'm local";
  const func = () => {
    return scope;
  };
  console.log(func());
};

functionScope();
console.log(scope);
