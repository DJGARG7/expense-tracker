// import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expenses = [
    { title: "Car Insurance", amount: 300, date: new Date(2021, 4, 28) },
    { title: "Fire Insurance", amount: 200, date: new Date(2021, 4, 29) },
    { title: "Life Insurance", amount: 500, date: new Date(2021, 4, 30) },
  ];
  // const [expenses1, setNewValue] = useState(expenses);
  // console.log(expenses1);
  // console.log("it runs");
  const finalDataHandler = expense => {
    console.log(expense);
  //   setNewValue([enteredExpenseData, ...expenses1]);
  };
  return (
    <div>
      <NewExpense onFinalData={finalDataHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
