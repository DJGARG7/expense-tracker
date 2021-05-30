import Card from "../UI/Card";
import ExpenseItem from "./expenseItem";
import ExpensesFilter from "./ExpenseFilter";
import "../Styling.css";
import { useState } from "react";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (year) => {
    setFilteredYear(year);
    console.log(filteredYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        currYear={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
    </Card>
  );
};

export default Expenses;
