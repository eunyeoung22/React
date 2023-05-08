import React, { useState } from "react";

const Test02 = () => {
    const [chk, setChk] = useState(true);
    const onChk = (e) => {
        const { checked } = e.target;
        setChk(checked);
    };
    return (
        <div style={{ color: chk ? "blue" : "hotpink", fontSize: 25, margin: 30 }}>
            <input type="checkbox" checked={chk} onChange={onChk} /> Have a nice day!
        </div>
    );
};

export default Test02;
