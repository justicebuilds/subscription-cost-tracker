
const subscriptions = [
  { name: "Disney+", monthlyCost: 14 },
  { name: "Netflix", monthlyCost: 10 },
  { name: "Amazon Prime", monthlyCost: 16 },
  { name: "Blink", monthlyCost: 13 },
  { name: "Hulu", monthlyCost: 13 },
  { name: "Peacock", monthlyCost: 9 }
];

function calculateYearlyCost(monthlyCost) {
  return monthlyCost * 12;
}

function showSubscriptions() {
  let monthlyTotal = 0;
  let list = "";

  for (const subscription of subscriptions) {
    monthlyTotal = monthlyTotal + subscription.monthlyCost;

    let yearlyCost = calculateYearlyCost(subscription.monthlyCost);

    list = list + `<p>${subscription.name}: $${subscription.monthlyCost.toFixed(2)} a month / $${yearlyCost.toFixed(2)} a year</p>`;
  }

  document.getElementById("subscription-list").innerHTML = list;

  document.getElementById("monthly-total").textContent =
    "Monthly total of all subscriptions: $" + monthlyTotal.toFixed(2);

  document.getElementById("yearly-total").textContent =
    "Yearly total of all subscriptions: $" + calculateYearlyCost(monthlyTotal).toFixed(2);
}

showSubscriptions();

document.getElementById("subscription-form").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("subscription-name").value.trim();
  let cost = Number(document.getElementById("subscription-cost").value);

  if (name === "" || cost <= 0) {
    return;
  }

  subscriptions.push({ name: name, monthlyCost: cost });

  showSubscriptions();

  document.getElementById("subscription-form").reset();
});
