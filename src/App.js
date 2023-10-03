import Expense from "./components/Expenses/Expense";

export default function App() {
  const items = [{title:"Food",price:200},{title:"Petrol",price:100},{title:"Water",price:50}]
  return (
    <div className="App">
      <Expense title={items[0].title} price={items[0].price} />
      <Expense title={items[1].title} price={items[1].price} />
      <Expense title={items[2].title} price={items[2].price} />
    </div>
  );
}
