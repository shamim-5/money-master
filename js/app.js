//calculate total cost
function getTotalCost() {
  const foodCost = getAmountSingle("food");
  const rentCost = getAmountSingle("rent");
  const clothsCost = getAmountSingle("clothes");
  const costTotalAmount = foodCost + rentCost + clothsCost;
  const expensesTotal = document.getElementById("expenses-total");

  expensesTotal.innerText = costTotalAmount;
  return costTotalAmount;
  console.log(costTotalAmount);
}

// common function
function getAmountSingle(amount) {
  const itemCost = document.getElementById(amount + "-cost");
  const itemCostAmount = parseFloat(itemCost.value);
  return itemCostAmount;
}
function getAmountTotal(amount) {
  const catchAmount = document.getElementById(amount + "-total");
  const totalAmount = parseFloat(catchAmount.innerText);
  return totalAmount;
}
function getTotal(amount) {
  const total = document.getElementById(amount + "-total");
  const totalAmount = parseFloat(total.value);
  return totalAmount;
}
// calculate button event handler
document.getElementById("calculate-btn").addEventListener("click", function () {
  const balanceTotal = document.getElementById("balance-total");
  balanceTotal.innerText = getTotal("income") - getTotalCost();
  getTotalCost();
});
// calculate savings amount
function getTotalSavings() {
  const percentTotalAmount = getTotal("percent") / 100;
  const incomeTotalAmount = getTotal("income");
  const savingsTotal = document.getElementById("savings-total");
  savingsTotal.innerText = percentTotalAmount * incomeTotalAmount;
  return percentTotalAmount * incomeTotalAmount;
}
// save button event handler
document.getElementById("savings-btn").addEventListener("click", function () {
  const savingsTotalAmount = getAmountTotal("savings");
  const balanceTotalAmount = getAmountTotal("balance");
  const remainingTotal = document.getElementById("remaining-total");

  remainingTotal.innerText = balanceTotalAmount - getTotalSavings();
  getTotalSavings();
});
