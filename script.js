let detail;
let amount;

//Resets Botton
function ResertBotton(){
  document.getElementById("detail").value = '';
  document.getElementById("amount").value = '';
}


// holds all transactions
let transactions = [];
document.body.onload=load();

// get values from inputs
function getInputValues() {
  detail = document.getElementById("detail").value;
  amount = Number(document.getElementById("amount").value);
}

// validate inputs
function isValid() {
  if (!detail || !amount) {
    alert("Detail and Amount are both required");
    return false;
  }
  return true;
}

// populate the table
function displayTable() {
  const tableBody = document.getElementById("tableBody");

  tableBody.innerHTML = "";

  for (let i = 0; i < transactions.length; i++) {
    tableBody.innerHTML += `
        <tr>
                <th>${transactions[i].type}</th>
                <th>${transactions[i].detail}</th>
                <th>${transactions[i].amount}</th>
            </tr>
        `;
  }
}


function getResults () {
    const incomeTotal = document.getElementById("incomeTotal");
    const expenseTotal = document.getElementById("expenseTotal");
    const amountTotal = document.getElementById("amountTotal");

    let income = 0;
    let expense = 0;
    let amount = 0;

   for (let i = 0; i < transactions.length; i++) {

    if (transactions[i].type === "Income") {
        income += transactions[i].amount;
    }

    if (transactions[i].type === "Expense") {
        expense += transactions[i].amount;
    }
       
   }

   incomeTotal.innerHTML = income;
   expenseTotal.innerHTML = expense;
   amountTotal.innerHTML = income - expense;
}


function calc(type) {
  getInputValues();

  if (!isValid()) return;

  transactions.push({ type, detail, amount })
  getResults();
  displayTable();
  document.getElementById("detail").value= null;
  Number(document.getElementById("amount").value = null);
}

//RefreshBotton
function RefreshBotton(){
  document.getElementById("tableBody").innerHTML = "";
  document.getElementById("incomeTotal").innerHTML = "R0";
  document.getElementById("expenseTotal").innerHTML = "R0";
  document.getElementById("amountTotal").innerHTML = "R0";
}

 