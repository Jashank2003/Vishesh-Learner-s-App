import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {createRoot} from 'react-dom/client'
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <Router>
        <App/>
    </Router>
);