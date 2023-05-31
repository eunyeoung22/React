import React from "react";
import "./ExpenseDate.css";

function ExpenseDay(props) {
    const Month = props.date.toLocaleString("en-KO", { month: "long" });
    const Day = props.date.toLocaleString("en-KO", { day: "2-digit" });
    const Year = props.date.getFullYear();
    return (
        <div className="expense-date">
            <div className="expense-month">{Month}</div>
            <div className="expense-day">{Day}</div>
            <div className="expense-year">{Year}</div>
        </div>
    );
}

export default ExpenseDay;
