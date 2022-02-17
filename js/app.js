// common function
function getAmountSingle(amount) {
  const itemCost = document.getElementById(amount + "-cost");
  const itemCostAmount = parseFloat(itemCost.value);

  if (itemCostAmount > 0) {
    return itemCostAmount;
  } else if (isNaN()) {
    alert("Please put valid number !");
  }
}
function getTotal(amount) {
  const total = document.getElementById(amount + "-total");
  const totalAmount = parseFloat(total.value);

  if (totalAmount > 0) {
    return totalAmount;
  } else if (isNaN()) {
    alert("Please put only number !");
  }
}
function getAmountTotal(amount) {
  const catchAmount = document.getElementById(amount + "-total");
  const totalAmount = parseFloat(catchAmount.innerText);
  return totalAmount;
}
// calculate total cost
function getTotalCost() {
  const foodCost = getAmountSingle("food");
  const rentCost = getAmountSingle("rent");
  const clothsCost = getAmountSingle("clothes");
  const costTotalAmount = foodCost + rentCost + clothsCost;
  const expensesTotal = document.getElementById("expenses-total");
  expensesTotal.innerText = costTotalAmount;
  return costTotalAmount;
}
// calculate savings amount
function getTotalSavings() {
  const percentTotalAmount = getTotal("percent") / 100;
  const incomeTotalAmount = getTotal("income");
  const savingsTotal = document.getElementById("savings-total");
  savingsTotal.innerText = percentTotalAmount * incomeTotalAmount;
  return percentTotalAmount * incomeTotalAmount;
}
// calculate button event handler
document.getElementById("calculate-btn").addEventListener("click", function () {
  const balanceTotal = document.getElementById("balance-total");

  balanceTotal.innerText = getTotal("income") - getTotalCost();
  getTotalCost();
});
// save button event handler
document.getElementById("savings-btn").addEventListener("click", function () {
  const savingsTotalAmount = getAmountTotal("savings");
  const balanceTotalAmount = getAmountTotal("balance");
  const remainingTotal = document.getElementById("remaining-total");

  remainingTotal.innerText = balanceTotalAmount - getTotalSavings();
  getTotalSavings();
});
