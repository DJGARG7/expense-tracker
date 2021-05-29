import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
function expenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate da={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}
export default expenseItem;
