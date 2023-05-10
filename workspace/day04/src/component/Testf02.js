import React, { useState } from "react";
import Testf02sub from "./Testf02sub";

const Testf02 = () => {
    const [isShow, setIsShow] = useState(false);

    const onToggle = (e) => {
        setIsShow(!isShow);
    };
    return (
        <div>
            <button onClick={onToggle}>{isShow ? "숨기기" : "보이기"}</button>
            <hr />
            {isShow && <Testf02sub />}
        </div>
    );
};

export default Testf02;
