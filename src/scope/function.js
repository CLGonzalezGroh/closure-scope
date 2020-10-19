const fruits = () => {
  var fruit = "apple";
  console.log(fruit);
};

fruits();
//console.log(fruit); no funciona porque esta dentro de la funcion

const anotherFunction = () => {
  var x = 1;
  var x = 2;
  let y = 1;
  //let y = 2; let no te deja reasignar
  console.log("x:", x);
  console.log("y:", y);
};

anotherFunction();
