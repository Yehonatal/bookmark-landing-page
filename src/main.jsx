import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import "./Style/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Header />
        <Hero />
        <Features />
    </React.StrictMode>
);
