import React, { useEffect, useMemo, useState } from "react";

const user = [
    { id: 1, name: "홍길동" },
    { id: 2, name: "김수혁" },
    { id: 3, name: "홍수아" },
    { id: 4, name: "안보현" },
    { id: 5, name: "신혜선" },
    { id: 6, name: "제니" },
    { id: 7, name: "지수" },
    { id: 8, name: "조세호" },
    { id: 9, name: "네이버" },
    { id: 10, name: "이동욱" },
];

const Test05 = () => {
    const [text, setText] = useState("");
    let [data, setData] = useState(user);
    const [search, setSearch] = useState("");

    //글자가 입력될때마다 바로 검색
    // useEffect(() => {
    //     //setData(user.filter(item=>item.name.toLowerCase.indexOf(text.toLowerCase()!==--1)))
    //     setData(user.filter((item) => item.name.toLowerCase().includes(text.toLowerCase())));
    // });

    //검색 버튼 -useMemo사용
    data = useMemo(() => {
        return user.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()));
    }, [search]);
    const onSearch = () => {
        setSearch(text);
    };

    // const onSearch = () => {
    //     setData(user.filter((item) => item.name.toLowerCase().includes(text.toLowerCase())));
    // };
    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={onSearch}>검색</button>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        {item.id}: {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Test05;
