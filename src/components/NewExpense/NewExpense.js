import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [flag, setFlag] = useState(0);
  const addHandler = () => {
    setFlag(1);
  };
  const backHandler = () => {
    setFlag(0);
  };
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onFinalData(expenseData);
  };
  return (
    <div className="new-expense">
      {flag === 0 ? (
        <button onClick={addHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} back={backHandler}/>
      )}
    </div>
  );
};
export default NewExpense;
