import Expenses from "./components/Expenses/Expenses";
function App() {
  const expenses = [
    { title: "Car Insurance", amount: 300, date: new Date(2021, 4, 28) },
    { title: "Fire Insurance", amount: 200, date: new Date(2021, 4, 29) },
    { title: "Life Insurance", amount: 500, date: new Date(2021, 4, 30) },
  ];
  
  return (
    <div>
      <h2>Let' get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
