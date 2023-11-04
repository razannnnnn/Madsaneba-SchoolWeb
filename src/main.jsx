import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
