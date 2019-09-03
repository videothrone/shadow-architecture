import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./welcome";

let elem;
if (location.pathname === "/welcome") {
    elem = <Welcome />;
} else {
    elem = (
        <p>
            <img src="./img/coming-soon.png" />
        </p>
    );
}

ReactDOM.render(elem, document.querySelector("main"));
