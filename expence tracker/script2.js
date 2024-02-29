 let expenses = [];

  function addExpense() {
    const description = document.getElementById("description").value;
    const amount = parseFloat(document.getElementById("amount").value);

    if (description && !isNaN(amount)) {
      const expense = { description, amount };
      expenses.push(expense);
      updateTable();
      document.getElementById("expenseForm").reset();
    } else {
      alert("Please enter valid description and amount.");
    }
  }

  function deleteExpense(index) {
    expenses.splice(index, 1);
    updateTable();
  }

  function editExpense(index) {
    const editedDescription = prompt("Edit description:", expenses[index].description);
    const editedAmount = parseFloat(prompt("Edit amount:", expenses[index].amount));

    if (editedDescription && !isNaN(editedAmount)) {
      expenses[index].description = editedDescription;
      expenses[index].amount = editedAmount;
      updateTable();
    } else {
      alert("Please enter valid description and amount.");
    }
  }

  function updateTable() {
  const tableBody = document.getElementById("expenseList");
  let totalExpense = 0; // Initialize total expense variable

  tableBody.innerHTML = "";

  expenses.forEach((expense, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${expense.description}</td>
      <td>${expense.amount}</td>
      <td>
        <button onclick="editExpense(${index})" id="button2">Edit</button>
        <button onclick="deleteExpense(${index})" id="button3">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);

    // Accumulate expense amount to calculate total expense
    totalExpense += expense.amount;
  });

  // Display total expense in the footer row
  const totalAmountCell = document.getElementById("totalAmount");
  totalAmountCell.textContent = totalExpense;
}