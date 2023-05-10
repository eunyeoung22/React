import React, { useState, useRef } from "react";

const Test10 = () => {
    const seq = useRef(1);
    const nameRef = useRef();
    const [data, setData] = useState([]);

    const [formData, setformData] = useState({
        name: "",
        age: "",
    });
    const { name, age } = formData;

    const onInput = (e) => {
        const { name, value } = e.target;

        setformData({
            ...formData,
            [name]: value,
        });
    };
    const onAdd = (e) => {
        e.preventDefalut(); //이동 방지
        if (!name || !age) return;
        setData([
            ...data,
            {
                seq: seq.current++,
                name,
                age,
            }, //name:name, id:id =>key 값과 value값이 같으면 한번만 써준다.
        ]);

        //초기화

        setformData({
            name: "",
            age: "",
        });
        name.current.focus();
    };

    return (
        <div>
            <form onSubmit={onAdd}>
                이름 : <input type="text" name="name" value={name} onChange={onInput} ref={nameRef} />
                <br />
                나이 : <input type="text" name="age" value={age} onChange={onInput} />
                <br />
                <button type="submit">추가</button>
            </form>
            <hr />
            <ul>
                {data.map((item) => (
                    <li>
                        {item.seq} / {item.name} : {item.age}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Test10;
