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
import APIUserProvider from "../providers/APIUserProvider";
import Profile from "./profile/Profile";

const App = () => {
    return (
        <BrowserRouter>
            <APIUserProvider>
                <APIErrorProvider>
                    <APISuccessProvider>
                        <Header />
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/about-us" element={<AboutUs />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/profile" element={<Profile />} />
                            {/* More front end routes here */}
                        </Routes>
                        <APIErrorNotification />
                        <APISuccessNotification />
                    </APISuccessProvider>
                </APIErrorProvider>
            </APIUserProvider>
        </BrowserRouter>

    );
};

export default App;
