import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../../scss/components/App.scss';
import APIErrorProvider from "../providers/APIErrorProvider";
import APIErrorNotification from "../UI/Messages/APIErrorNotification";
import AboutUs from "./aboutUs/AboutUs";
import Header from "./header/Header";
import Main from "./main/Main";
import Register from "./register/Register";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <APIErrorProvider>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/register" element={<Register />} />
                    {/* More front end routes here */}
                </Routes>
                <APIErrorNotification />
            </APIErrorProvider>
        </BrowserRouter>

    );
};

export default App;