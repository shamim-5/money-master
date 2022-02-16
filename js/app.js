document.getElementById("calculate-btn").addEventListener("click", function () {
  // total cost
  const foodCost = document.getElementById("food-cost");
  const foodCostAmount = parseFloat(foodCost.value);

  const rentCost = document.getElementById("rent-cost");
  const rentCostAmount = parseFloat(rentCost.value);

  const clothsCost = document.getElementById("clothes-cost");
  const clothsCostAmount = parseFloat(clothsCost.value);

  const costTotalAmount = foodCostAmount + rentCostAmount + clothsCostAmount;
  // total expenses
  const expensesTotal = document.getElementById("expenses-total");
  const expensesTotalAmount = parseFloat(expensesTotal.innerText);
  expensesTotal.innerText = expensesTotalAmount + costTotalAmount;

  // income total
  const incomeTotal = document.getElementById("income-total");
  const incomeTotalAmount = parseFloat(incomeTotal.value);
  // total balance
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalAmount = parseFloat(balanceTotal.innerText);
  balanceTotal.innerText = incomeTotalAmount - expensesTotalAmount;
});

// savings button event handler

document.getElementById("credit-btn").addEventListener("click", function () {
  // credit percent
  const creditPercent = document.getElementById("credit-percent");
  const creditPercentAmount = parseFloat(creditPercent.value) / 100;

  // income total

  const incomeTotal = document.getElementById("income-total");
  const incomeTotalAmount = parseFloat(incomeTotal.value);
  // saving amount
  const creditTotal = document.getElementById("credit-total");
  const creditTotalAmount = parseFloat(creditTotal.innerText);
  // remaing balance
  const balanceLeft = document.getElementById("balance-left");
  const balanceLeftAmount = parseFloat(balanceLeft.innerText);
  // set saving
  creditTotal.innerText = incomeTotalAmount * creditPercentAmount;
  //balance total
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalAmount = parseFloat(balanceTotal.innerText);
  // set remaining
  balanceLeft.innerText = balanceTotalAmount - creditTotalAmount;
});
