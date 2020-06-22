/*
  Input:
    - 1 number and 1 array
      - inventoryItem: number, corresponds to id in transactions object
      - transactions: array of objects
  Output:
    - 1 array
      - array of objects
      - elements in input transactions where id matches input item id
*/

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(transaction => transaction.id === inventoryItem);
}

function isItemAvailable(inventoryItem, transactions) {
  let itemTransactions = transactionsFor(inventoryItem, transactions);

  let quantities = itemTransactions.map(transaction => {
    return transaction.movement === 'in' ? 
      transaction.quantity : 
      -transaction.quantity;
  });

  let netQuantity = quantities.reduce((net, quantity) => net + quantity);

  return netQuantity > 0;
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
