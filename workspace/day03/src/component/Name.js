import React from "react";

const Name = ({ name, onInputName }) => {
    return (
        <div>
            <h3>이름 입력</h3>
            <input type="text" value={name} onChange={onInputName} />
        </div>
    );
};

export default Name;
