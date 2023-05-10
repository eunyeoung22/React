import React from "react";

const Test07Print = ({ name, age, addr, phone, onPrev, onNext }) => {
    return (
        <div>
            <ul>
                <li>
                    이름 : <em>{name}</em>
                </li>
                <li>나이 : {age}</li>
                <li>주소 : {addr}</li>
                <li>핸드폰 : {phone}</li>
            </ul>
            <p>
                <button onClick={onPrev}>이전</button>&nbsp;
                <button onClick={onNext}>다음</button>
            </p>
        </div>
    );
};

export default Test07Print;
