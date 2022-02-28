import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ExpenseItem from "./components/ExpenseItem";
import Expense from "./components/Expense";
import "./components/Expenses.css";
import NewExpense from './components/NewExpense';
import ExpensesFilter from "./components/ExpensesFilter.js";

const DUMMY_EXPENSES =[{
  id:'e1',
  title:'Lap Top',
  amount:2940.67,
  date:new Date(2021,10,29)

},
{
  id:'e2',
  title:'New TV',
  amount:292.67,
  date:new Date(2021,9,29)

},
{
  id:'e3',
  title:'Car Insurance',
  amount:29.67,
  date:new Date(2020,1,29)

},
{
  id:'e4',
  title:'New Desk (Wooden)',
  amount:94.67,
  date:new Date(2020,2,29)

},
]

function App() {
  const[expenses,setexpenses]=useState(DUMMY_EXPENSES);
  
const AddExpenses=(expense)=>{
   //expenses.push(expense);
   console.log(expense);
   console.log(expenses);
   //setexpenses(expenses);
   setexpenses((prevexpenses)=>{
    return [expense,...prevexpenses];
  });
  //console.log(expenses);

 };

const filteredyearhandler=(filteredyear)=>{
  let filteredarray=expenses.filter(obj=>obj.date.getFullYear().toString()===filteredyear);
  //expenses=filteredarray;
  setexpenses(filteredarray);
}
  return (
    <div className="">
      {<NewExpense SaveNewExpenses={AddExpenses}/> }
       <Expense expense={expenses} />
    </div>
  );
}

export default App;
