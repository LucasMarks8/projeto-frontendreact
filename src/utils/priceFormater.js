export const priceFormater = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",

  minumunFractionsDigits: 0,
  maximunFractionDigits: 0,
});
