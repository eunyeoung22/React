import React from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
    const expenses = [
        { id: "e1", title: "Car Insurance", amount: 294.67, date: new Date(2023, 1, 28) },
        { id: "e2", title: "Toilet paper", amount: 100.67, date: new Date(2023, 2, 28) },
        { id: "e3", title: "TV", amount: 300.67, date: new Date(2023, 3, 28) },
        { id: "e4", title: "Spoon", amount: 25.67, date: new Date(2023, 4, 28) },
        { id: "e5", title: "New Desk", amount: 202.67, date: new Date(2023, 6, 28) },
    ];

    const addExpenseHandler = (expense) => {
        console.log("In App.js");
        console.log(expense.title);
    };
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
            <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
            <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
            <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
            <ExpenseItem title={expenses[4].title} amount={expenses[4].amount} date={expenses[4].date} />
        </div>
    );
};

export default App;
