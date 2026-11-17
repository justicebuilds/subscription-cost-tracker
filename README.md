 # Subscription Cost Tracker

This shows me how much I spend on each subscription monthly and annually, along with the combined totals for all subscriptions.

## The problem
I have way too many subscriptions to keep track of and I'm not even sure how much they're actually costing me.

## How to run it

You need nothing installed.

1. Open the [Subscription Tracker]([(https://justicebuilds.github.io/subscription-cost-tracker/)]).
2. The page displays a list of subscriptions with their monthly and yearly costs, followed by the combined totals.

Or click "Code", then "Download ZIP", unzip the folder, and open `index.html` in your browser.

## What it looks like when it works

```
Disney+: $14 a month / $168 a year
Netflix: $10 a month / $120 a year
Amazon Prime: $16 a month / $192 a year
Blink: $13 a month / $156 a year
Hulu: $13 a month / $156 a year
Peacock: $9 a month / $108 a year

Monthly total of all subscriptions: $75
Yearly total of all subscriptions: $900
```

## How I built it

- Written in JavaScript, HTML and CSS, first as a pen on CodePen, then kept here and published with GitHub Pages.
- The data uses rounded monthly subscription costs.
- I decided to calculate what each subscription was also costing me each year, which helps me decide if i should cancel something.
- AI use: My Code Coach suggested changes to formatting, changing let yearlyCost to const yearlyCost, and using exact decimal amounts. I accepted the const suggestion because the value does not change so const made more sense. I rejected the formatting changes because they did not affect how my code runs. I chose rounded dollar amounts to keep the project simple, but did add the decimal option for other users to add their accurate prices.

## What I would change next

- If I had more time, I would find a way so that when you refresh you don't have to start over, your info stays. I would also work around the layout a bit and place things differently on the screen.

## Files

- `index.html`: the page, which loads `style.css` and `script.js`
- `style.css`: This makes the background purple, with headings light purple & font white.
- `script.js`: This does my subscription/bill math, as well as allows me to add anything and clear it out.
- `plan.md`: my capstone plan from the course
