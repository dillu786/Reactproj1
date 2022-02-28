
import ExpenseItem from "./ExpenseItem.js";
import './ExpenseList.css';

const ExpensesList=(props)=>{
    let ExpenseContent= <p>No Expenses Found.</p>;
    if(props.items.length===0)
    {     
        return <h2 className="expenses-list__fallback"> Found No Expenses</h2>;
    }
    return(
        <ul className="expenses-list">
            {
            props.items.map(expense=> (
            <ExpenseItem 
                key={expense.id} 
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                />
                )
            )
        }       
            </ul>
    )

};

export default ExpensesList;