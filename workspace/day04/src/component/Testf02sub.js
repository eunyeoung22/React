import React, { useEffect, useState } from "react";

const Testf02sub = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    //브라우저에서 사용자가 웹페이지가 보여지는 영역을 기준으로 좌표를 표시
    const onMove = (e) => {
        setX(e.clientX);
        setY(e.clientY);
    };

    useEffect(() => {
        console.log("useEfeect");
        window.addEventListener("mousemove", onMove);

        return () => {
            console.log("cleanup");
            window.removeEventListener("mousemove", onMove);
        };
    }, []);

    return (
        <div>
            <h2>마우스 좌표</h2>
            <div style={{ border: "1px solid #000", width: 400, padding: 30, margin: 15 }}>
                <h3>
                    X축 : {x}, Y축 : {y}
                </h3>
            </div>
        </div>
    );
};

export default Testf02sub;
