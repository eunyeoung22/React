import React, { useState } from "react";
import ExpenseDay from "./ExpenseDay";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
    // function clickHandler() {
    //     console.log("Clicked!!");
    // }
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle("Updated!!");
    };
    return (
        <Card className="expense-item">
            <div>
                <ExpenseDay date={props.date} />
            </div>

            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
