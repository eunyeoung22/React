import React from "react";

const Test07Input = (props) => {
    //const {name, age, addr, phone} = user;
    console.log(props);
    return (
        <div>
            <p>
                이름 : <input type="text" value={props.user.name} name="name" onChange={props.onInput} />
            </p>
            <p>
                나이 : <input type="text" value={props.user.age} name="age" onChange={props.onInput} />
            </p>
            <p>
                주소 : <input type="text" value={props.user.addr} name="addr" onChange={props.onInput} />
            </p>
            <p>
                핸드폰 : <input type="text" value={props.user.phone} name="phone" onChange={props.onInput} />
            </p>
            <p>
                <button onClick={props.onNext}>다음</button>
            </p>
        </div>
    );
};

export default Test07Input;
