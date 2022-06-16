import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../scss/index.scss';
import AboutUs from "./components/aboutUs/AboutUs";
import App from "./components/App";
import Header from "./components/header/Header";
import Register from "./components/register/Register";

const container = document.getElementById('app');
const root = createRoot(container!);

root.render(
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/register" element={<Register />} />
            {/* More front end routes here */}
        </Routes>
    </BrowserRouter>
);