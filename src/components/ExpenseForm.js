import React from 'react';
import { useState } from 'react';
import './ExpenseForm.css';


const ExpenseForm=(props)=>{
    const[newTitle,setTitleHandler]=useState('');
    const[newAmount,setAmountHandler]=useState('');
    const[newDate,setDateHandler]=useState('');

//     const [userInput,SetUserInput]=useState({
// newTitle:'',
// newAmount:'',
// newDate:''
//     })
    //document.getElementById('').
    const titleChangeHandler=(event)=>{
        setTitleHandler(event.target.value);
        console.log(event.target.value);
        // SetUserInput({
        //     ...userInput,
        //     newTitle:event.target.value
        // })
    };
    const amountChangeHandler=(event)=>{
        setAmountHandler(event.target.value);
    }
    const dateChangeHandler=(event)=>{
        setDateHandler(event.target.value);
    }

    const SubmitExpenseForm=(event)=>{
     event.preventDefault();
     const newexpnese=
     {
         title:newTitle,
         amount:newAmount,
         date: new Date(newDate)

     }
     console.log('In Expense form')
     console.log(newexpnese);
     props.SaveExpense(newexpnese);
     setTitleHandler('');
     setAmountHandler('');
     setDateHandler('');
     
    }
    return (
    <form onSubmit={SubmitExpenseForm}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text'value={newTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control" >
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" value={newAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2022-12-31" value={newDate} onChange={dateChangeHandler}/>
                </div>
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={props.onCancel}>Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>
        </form>
        );
};
export default ExpenseForm;