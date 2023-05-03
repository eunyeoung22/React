import React from "react";

const Lion = (props) => {
    //비구조할당
    const { name } = props;

    return (
        <div>
            <h2>나는 {props.name} 컴포넌트입니다.</h2>
        </div>
    );
};

export default Lion;
