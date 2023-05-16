import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Main from "./page04/Main";
import MemberDetail from "./page04/MemberDetail";

const App04 = () => {
    return (
        <BrowserRouter>
            <>
                {/* 화면에 보이는 영역 */}
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    {/* 2단계로 경로 지정할때 */}
                    <Route path="/member">
                        <Route path=":memberId" element={<MemberDetail />} />
                    </Route>
                </Routes>
            </>
        </BrowserRouter>
    );
};

export default App04;
