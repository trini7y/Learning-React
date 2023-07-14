import React from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  function date(year, month, day) {
    return new Date(year, month, day);
  }
  const expense = [
    {
      id: "e1",
      title: "Toilet  Paper",
      amount: 94.12,
      date: date(2020, 7, 17),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car insurance ",
      amount: 294.67,
      date: date(2021, 2, 28),
    },
  ];
  const addExpenseHandler = (expense) => {
    console.log("In app.js");
    console.log(expense);
  };
  return (
    <div className="App">
      <NewExpense onSaveNewExpenseData={addExpenseHandler} />
      <Expenses expense={expense}></Expenses>
    </div>
  );
}

export default App;
