export const currencies = [
  {
    name: "United States Dollar",
    symbol: "$",
    code: "usd",
    abbr: "USD",
  },
  {
    name: "Ethiopian Birr",
    symbol: "ETB",
    code: "etb",
    abbr: "ETB",
  },
  {
    name: "Euro",
    symbol: "€",
    code: "eur",
    abbr: "EUR",
  },
  {
    name: "Pound Sterling",
    symbol: "£",
    code: "gbp",
    abbr: "GBP",
  },
];

export const getCurrency = (code) => {
  return currencies.find((currency) => currency.code === code);
};
