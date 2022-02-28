import { render } from "@testing-library/react";
import ExpenseItem from "./ExpenseItem.js";
import Card from "./Card.js";
import { useState } from "react";
import "./Expenses.css";
import ExpensesFilter  from "./ExpensesFilter.js";
import ExpensesList from "./ExpensesList.js";
import ExpensesChart  from "./ExpensesChart.js";

function Expense(props){
const [filteredYear,setFilteredYear]=useState('2020');
   const filterChangeHandler=(selectedyear)=>
   {
    setFilteredYear(selectedyear);
    //props.filteredyear(selectedyear);
   }
   


   const filteredExpenses=props.expense.filter(obj=>obj.date.getFullYear().toString()==filteredYear)

    return (
         
         < Card className="expenses">

           <ExpensesFilter
           selected={filteredYear}
           onChangeFilter={filterChangeHandler}        
           />
             <ExpensesChart expenses={filteredExpenses}/>
             <ExpensesList items={filteredExpenses} />
       
    </Card>
  );

    
}
export default Expense