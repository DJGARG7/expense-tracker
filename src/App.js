// import { io } from "socket.io-client";
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  // const socket = io("http://localhost:5000");
  // socket.on("connect", () => {
  //   console.log(socket.id);
  // });
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 300,
      date: new Date(2021, 4, 28),
    },
    {
      id: "e2",
      title: "Fire Insurance",
      amount: 200,
      date: new Date(2021, 4, 29),
    },
    {
      id: "e3",
      title: "Life Insurance",
      amount: 500,
      date: new Date(2020, 4, 30),
    },
  ];
  const [expenses1, setNewValue] = useState(expenses);
  const finalDataHandler = (expense) => {
    setNewValue([expense, ...expenses1]);
  };
  return (
    <div>
      <NewExpense onFinalData={finalDataHandler} />
      <Expenses items={expenses1} />
    </div>
  );
};

export default App;
