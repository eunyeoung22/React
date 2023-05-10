import React, { useState } from "react";
import Test07Input from "./Test07Input";
import Test07Print from "./Test07Print";
import Test07Output from "./Test07Output";
import "../css/Test07.css";

const Test07Main = () => {
    const [count, setCount] = useState(1);
    const [user, setUser] = useState({
        name: "",
        age: "",
        addr: "",
        phone: "",
    });
    const { name, age, addr, phone } = user;
    const onInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };
    const onPrev = () => {
        setCount(count - 1);
    };
    const onNext = () => {
        setCount(count + 1);
    };
    return (
        <div className="wrap">
            {count === 1 && <Test07Input user={user} onInput={onInput} onNext={onNext} />}
            {count === 2 && <Test07Print {...user} onNext={onNext} onPrev={onPrev} />}
            {count === 3 && <Test07Output name={name} />}
        </div>
    );
};

export default Test07Main;
