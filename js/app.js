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
    alert("Please put valid number !");
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
  const percentAmount = getTotal("percent");
  const percentTotalAmount = percentAmount / 100;
  const incomeTotalAmount = getTotal("income");
  const amountSaved = percentTotalAmount * incomeTotalAmount;
  return amountSaved;
}
// calculate button event handler
document.getElementById("calculate-btn").addEventListener("click", function () {
  const balanceTotal = document.getElementById("balance-total");

  if (getTotal("income") >= getTotalCost()) {
    balanceTotal.innerText = getTotal("income") - getTotalCost();
    getTotalCost();
  } else {
    alert("Your expenses must be lowest than your income");
  }
});
// save button event handler
document.getElementById("savings-btn").addEventListener("click", function () {
  const balanceTotalAmount = getAmountTotal("balance");
  const savingAmount = getAmountTotal("savings");
  const remainingTotal = document.getElementById("remaining-total");
  const savingTotalAmount = document.getElementById("savings-total");
  const percentTotalAmount = document.getElementById("percent-total");

  if (savingAmount < balanceTotalAmount) {
    remainingTotal.innerText = getAmountTotal("balance") - getTotalSavings();
    savingTotalAmount.innerText = getTotalSavings();
    if (remainingTotal.innerText < 0 || savingAmount > balanceTotalAmount) {
      alert("Percent of shaving moro than  balance !");
      remainingTotal.innerText = 0;
      savingTotalAmount.innerText = 0;
      percentTotalAmount.value = "";
    }
  } else if (isNaN()) {
    alert("Process wrong ! Please try again.");
  }
});
