import React from "react";

const Person = ({ name, age }) => {
    return (
        <div>
            <h2>
                나이 이름은 {name}이고, 나이는 {age} 입니다.
            </h2>
        </div>
    );
};

export default Person;
