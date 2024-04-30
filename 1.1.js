Date.prototype.daysTo = function (date) {
  const daysDifference = date - this;
  const numberOfDays = Math.floor(daysDifference / (1000 * 60 * 60 * 24));

  return numberOfDays;
};

const d1 = new Date("2024-04-25");
const d2 = new Date("2024-05-02");
console.log(d1.daysTo(d2));
