import React, { useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2023, 1, 28),
    },
    {
        id: "e2",
        title: "Toilet paper",
        amount: 100.67,
        date: new Date(2023, 2, 28),
    },
    { id: "e3", title: "TV", amount: 300.67, date: new Date(2023, 3, 28) },
    {
        id: "e4",
        title: "Spoon",
        amount: 25.67,
        date: new Date(2023, 4, 28),
    },
    {
        id: "e5",
        title: "New Desk",
        amount: 202.67,
        date: new Date(2023, 6, 28),
    },
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
};

export default App;
