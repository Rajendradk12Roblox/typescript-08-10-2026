/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

const sales = [
 125000,
 350000,
 78000,
 910000,
 150000,
 420000,
 275000,
 99000,
 640000,
 18000
]
let totalRevenue = 0;
let highestTransaction = sales[0];
let lowestTransaction = sales[0];
let countTransactionsAbove300k = 0;
for (let i = 0; i < sales.length; i++) {
  totalRevenue += sales[i];
  if (sales[i] > highestTransaction) {
    highestTransaction = sales[i];
  }
  if (sales[i] < lowestTransaction) {
    lowestTransaction = sales[i];
  }
  if (sales[i] >= 300000) {
    countTransactionsAbove300k++;
  }
}
console.log("Total sales revenue: Rp" + totalRevenue);
console.log("Highest transaction: Rp" + highestTransaction);
console.log("Lowest transaction: Rp" + lowestTransaction);
console.log("Number of transactions worth Rp300,000 or more: " + countTransactionsAbove300k);
console.log("Average transaction value: Rp" + (totalRevenue / sales.length));