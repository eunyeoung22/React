import React, { useState } from "react";
import "../css/Test06.css";

const Test06 = () => {
    const [data, setData] = useState([
        { seq: 1, name: "홍길동", age: "20", addr: "서울", done: true },
        { seq: 2, name: "라이언", age: "10", addr: "제주", done: true },
        { seq: 3, name: "네오", age: "20", addr: "울산", done: false },
        { seq: 4, name: "프로도", age: "22", addr: "부산", done: true },
        { seq: 5, name: "코난", age: "28", addr: "경기", done: false },
    ]);
    return (
        <div>
            <table className="list">
                <caption>신상명세서</caption>
                <colgroup>
                    <col className="seq"></col>
                    <col className="name"></col>
                    <col className="age"></col>
                    <col className="addr"></col>
                    <col className="done"></col>
                </colgroup>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>나이</th>
                        <th>주소</th>
                        <th>동의 여부</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((it) => (
                        <tr key={it.seq}>
                            <th>{it.seq}</th>
                            <th>{it.name}</th>
                            <th>{it.age}</th>
                            <th>{it.addr}</th>
                            <th>{it.done ? "동의" : "거짓"}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Test06;
