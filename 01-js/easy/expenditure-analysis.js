/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let reportArray = [];

  for (let i = 0; i < transactions.length; i++) {
    if (reportArray.length == 0) {
      reportArray.push({
        category: transactions[i]["category"],
        totalSpent: transactions[i]["price"],
      });
    } else if (
      containsCategory(reportArray, transactions[i]["category"]) != -1
    ) {
      reportArray[containsCategory(reportArray, transactions[i]["category"])][
        "totalSpent"
      ] += transactions[i]["price"];
    } else {
      reportArray.push({
        category: transactions[i]["category"],
        totalSpent: transactions[i]["price"],
      });
    }
  }

  return reportArray;
}

function containsCategory(report, categoryName) {
  for (let i = 0; i < report.length; i++) {
    if (report[i]["category"] === categoryName) {
      return i;
    }
  }
  return -1;
}
module.exports = calculateTotalSpentByCategory;
