import React from "react";
import Map from "./map";
import ReactDOM from "react-dom";

export default function App() {
    return (
        <React.Fragment>
            <h1>
                S h a d o w <span id="slash">/</span> A r c h i t e c t u r e
            </h1>
            <Map />
        </React.Fragment>
    );
}

ReactDOM.render(<App />, document.querySelector("main"));
