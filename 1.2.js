const orderByTotal = (sales) => {
  const improvedSale = sales.map((sale) => ({
    ...sale,
    Total: sale.amount * sale.quantity,
  }));

  improvedSale.sort((a, b) => b.Total - a.Total);
  return improvedSale;
};

const sales = [
  { amount: 300, quantity: 4 },
  { amount: 250, quantity: 10 },
  { amount: 260, quantity: 2 },
];

const totalSale = orderByTotal(sales);
console.log(totalSale);

const d1 = new Date("2024-04-25");
const d2 = new Date("2024-05-02");
console.log(d1.daysTo(d2));
