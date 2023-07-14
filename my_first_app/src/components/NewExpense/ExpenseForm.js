import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmonnt: "",
  //   enteredDate: "",
  // });

  const titleChangeHandle = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    //Instead of using setUserInput up there, use this instead
    // setUserInput((PrevState) => {
    //   return {
    //     ...PrevState,
    //     enteredTitle: event.target.value,
    //   };
    // });
  };

  const amountEntered = (event) => {
    setEnteredAmount(event.target.value);
    //  setUserInput({
    //    ...userInput,
    //    enteredAmount: event.target.value,
    //  });
  };

  const DateEntered = (event) => {
    setEnteredDate(event.target.value);
    //  setUserInput({
    //    ...userInput,
    //    enteredDate: event.target.value,
    //  });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      data: new Date(enteredDate),
    };

    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountEntered}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2025-12-31"
            value={enteredDate}
            onChange={DateEntered}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
