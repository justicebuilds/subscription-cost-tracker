const subscriptions = [
  { name: "Disney+", cost: 14 },
  { name: "Netflix", cost: 10 },
  { name: "Amazon Prime", cost: 16 },
  { name: "Blink", cost: 13 },
  { name: "Hulu", cost: 13 },
  { name: "Peacock", cost: 9 }
];

let monthlyTotal = 0;
let yearlyTotal = 0;

for (const subscription of subscriptions) {
  monthlyTotal = monthlyTotal + subscription.cost;

  let yearlyCost = subscription.cost * 12;

  console.log(`${subscription.name}: $${subscription.cost} a month / $${yearlyCost} a year`);
}

yearlyTotal = monthlyTotal * 12;

console.log("Monthly total of all subscriptions: $" + monthlyTotal);
console.log("Yearly total of all subscriptions: $" + yearlyTotal);
