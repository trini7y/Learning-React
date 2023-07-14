import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="Expense_area">
      <ExpenseItem
        title={props.expense[0].title}
        amount={props.expense[0].amount}
        date={props.expense[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expense[1].title}
        amount={props.expense[1].amount}
        date={props.expense[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expense[2].title}
        amount={props.expense[2].amount}
        date={props.expense[2].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
