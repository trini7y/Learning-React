import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  // let title = props.title;

  const changeTitle = () => {
    let titleChange = prompt("Enter a new title:");
    setTitle(titleChange);
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price ">${props.amount}</div>
      </div>
      <button onClick={changeTitle}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
