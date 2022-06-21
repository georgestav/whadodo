import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../../scss/components/App.scss';
import APIErrorProvider from "../providers/APIErrorProvider";
import APISuccessProvider from "../providers/APISuccessProvider";
import APIErrorNotification from "../UI/Messages/APIErrorNotification";
import APISuccessNotification from "../UI/Messages/APISuccessNotification";
import AboutUs from "./aboutUs/AboutUs";
import Header from "./header/Header";
import Main from "./main/Main";
import Register from "./register/Register";
import Login from "./login/Login";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <APIErrorProvider>
                <APISuccessProvider>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        {/* More front end routes here */}
                    </Routes>
                    <APIErrorNotification />
                    <APISuccessNotification />
                </APISuccessProvider>
            </APIErrorProvider>
        </BrowserRouter>

    );
};

export default App;
