import React, { useState } from "react";
import "../css/Test03.css";
import Test03Modal from "./Test03Modal";

const Test03 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpen = () => {
        setIsOpen(true); // 상태값을 false이기때문에 onOpen을 클릭 시 true로 변경됨
    };

    const onClose = () => {
        setIsOpen(false);
    };
    return (
        <div>
            <button className="button" onClick={onOpen}>
                팝업창
            </button>
            {
                isOpen && <Test03Modal onClose={onClose} /> //isopen이 참이면 모달창을 띄워라
            }
        </div>
    );
};

export default Test03;
