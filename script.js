const subscriptions = [
  { name: "Disney+", monthlyCost: 14 },
  { name: "Netflix", monthlyCost: 10 },
  { name: "Amazon Prime", monthlyCost: 16 },
  { name: "Blink", monthlyCost: 13 },
  { name: "Hulu", monthlyCost: 13 },
  { name: "Peacock", monthlyCost: 9 }
];

let monthlyTotal = 0;
let yearlyTotal = 0;

function calculateYearlyCost(monthlyCost) {
  return monthlyCost * 12;
}

for (const subscription of subscriptions) {
  monthlyTotal = monthlyTotal + subscription.monthlyCost;

   let yearlyCost = calculateYearlyCost(subscription.monthlyCost);

  console.log(`${subscription.name}: $${subscription.monthlyCost} a month / $${yearlyCost} a year`);
}


yearlyTotal = monthlyTotal * 12;


console.log("Monthly total of all subscriptions: $" + monthlyTotal);

console.log("Yearly total of all subscriptions: $" + yearlyTotal);
