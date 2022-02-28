import './NewExpenseForm.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react/cjs/react.development';
const NewExpense=(props)=>{

    const [isEditing,setIsEditing] =useState(false);
    const SaveExpenseForm=(expense)=>
    {
        const expensedata=
        {
            id:Math.random().toString(),
            ...expense,
            
        }
     props.SaveNewExpenses(expensedata);
     setIsEditing(false);
     console.log(expensedata);
    }

    const startEditingHandler=()=>{
        setIsEditing(true);
    }
    const stopEditingHandler=()=>
    {
        setIsEditing(false);
    }
    return <div className="new-expense">
        {!isEditing&&<button onClick={startEditingHandler}>Add New Expenses</button>}
        {isEditing&&<ExpenseForm SaveExpense={SaveExpenseForm}
        onCancel={stopEditingHandler}/>}
        
    </div>
}
export default NewExpense;