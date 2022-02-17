//total cost
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

// cost common function
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
  console.log(getTotalCost());
});

// save button event handler
document.getElementById("credit-btn").addEventListener("click", function () {
  const percentTotalAmount = getTotal("percent") / 100;
  const creditTotal = document.getElementById("credit-total");
  const creditTotalAmount = getAmountTotal("credit");
  const remainingTotal = document.getElementById("remaining-total");
  // const remainingTotalAmount = getAmountTotal("remaining");
  const incomeTotalAmount = getTotal("income");

  creditTotal.innerText = percentTotalAmount * incomeTotalAmount;
  remainingTotal.innerText = incomeTotalAmount - creditTotalAmount;
});
