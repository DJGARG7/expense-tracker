import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import Chart from "./ExpensesChart";
import "../Styling.css";
import { useState } from "react";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };
  const filteredItems = props.items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );
  const chartData = filteredItems.map((filteredItem) => {
    return { month: filteredItem.date.getMonth(), amount: filteredItem.amount };
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        currYear={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <Chart expenses={chartData} />
      <ExpensesList filItems={filteredItems} />
    </Card>
  );
};

export default Expenses;
