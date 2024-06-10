const getPrice = (price) => {
  let returnIntegerPart = [];
  let integerPartStringList = price?.toString().split("") || [];

  integerPartStringList.reverse().forEach((num, ind) => {
    returnIntegerPart.push(num);

    if ((ind + 1) % 3 == 0 && integerPartStringList.length - 1 != ind) {
      returnIntegerPart.push(",");
    }
  });

  return returnIntegerPart.reverse().join("");
};

export default getPrice;
