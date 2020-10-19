const moneyBox = (coins) => {
  var saveCoins = 0;
  saveCoins += coins;
  console.log(`MoneyBox: $${saveCoins}`);
};

moneyBox(5);
moneyBox(10);
moneyBox(20);

const moneyBox2 = () => {
  let saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(saveCoins);
  };
  return countCoins;
};

const myMoneyBox = moneyBox2();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);
