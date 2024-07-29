const singleToDouble = (num) => {
  let number = num * 100;
  let numberToString = number.toString();
  if (number < 10) numberToString = "0" + number;
  return numberToString.slice(0, 2);
};

const getPrice = (price) => {
  let num;

  if (typeof price == "string") {
    num = Number.parseFloat(price);
  } else {
    num = price;
  }

  const integerPart = Math.floor(num);
  const decimalPart = num - integerPart;

  const decimal = Number.parseFloat(decimalPart + "").toFixed(2);

  let returnIntegerPart = [];
  let integerPartStringList = integerPart.toString().split("");

  integerPartStringList.reverse().forEach((num, ind) => {
    returnIntegerPart.push(num);

    if ((ind + 1) % 3 == 0 && integerPartStringList.length - 1 != ind) {
      returnIntegerPart.push(",");
    }
  });

  let returnIntegerPartInString = returnIntegerPart.reverse().join("");

  return {
    withDecimal: returnIntegerPartInString + "." + singleToDouble(decimal),
    withOutDecimal: returnIntegerPartInString,
  };
};

export default getPrice;
