
import "./ExpenseItem.css";
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate.js";
import Card from "./Card.js"


function ExpenseItem(props)
{

    const [title,setTitle]=useState(props.title);
    //let title=props.title;
      const ChangeTitle=()=>
      {
       setTitle('Updated!!!');
       console.log(title);
      }
    return (
        <Card className="expense-item">
           <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                <div> <input value="Change Title" onClick={ChangeTitle}type='button'/></div>
            </div>
        </Card>
  )
}
export default ExpenseItem;