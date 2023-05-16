import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MemberDetail = () => {
    const { memberId } = useParams();
    const navigate = useNavigate();
    const css = {
        border: "1px solid cyan",
        margin: 20,
        padding: 20,
    };
    const [data, setData] = useState("");
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${memberId}`;
        axios.get(url).then((res) => setData(res.data));
    }, []);

    const onBack = () => {
        //navigate('/')
        navigate(-1); //history.go(-1)과 같음
    };

    return (
        <div style={css}>
            <h2>MemberDetail Page: {memberId}</h2>
            <h4>이름 : {data.name}</h4>
            <ul>
                <li>이메일:{data.email}</li>
                <li>전화번호:{data.phone}</li>
                <li>웹사이트:{data.website}</li>
            </ul>
            <button onClick={onBack}>뒤로</button>
        </div>
    );
};

export default MemberDetail;
