import React, { useState } from "react";
import CatData from "./CatData";
import CatList from "./CatList";
import "../css/reset.css";
import "../css/style.css";

const Cat = () => {
    const [data, setData] = useState(CatData);
    return (
        <div>
            <section className="business">
                <div className="inner">
                    <h2>고양이</h2>
                    <p>고양이들</p>
                    <CatList data={data} />
                </div>
            </section>
        </div>
    );
};

export default Cat;
