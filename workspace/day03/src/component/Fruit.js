import React from "react";

const Fruit = ({ fruit, onInputFruit }) => {
    return (
        <div>
            <h2>과일명 입력</h2>
            <input type="text" value={fruit} onChange={onInputFruit} />
        </div>
    );
};

export default Fruit;
