import React from "react";
import Registration from "./registration";
import { HashRouter, Route, Redirect } from "react-router-dom";
import Login from "./login";

export default function Welcome() {
    return (
        <HashRouter>
            <div className="flex-container">
                <div id="welcome">
                    {/*<h1>MARTIALNET</h1>*/}
                    <img src="./img/coming-soon.png" id="welcome-logo" />
                </div>
                <Route exact path="/" component={Registration} />
                <Route path="/login" component={Login} />
                <Redirect path="*" to="/" />
            </div>
        </HashRouter>
    );
}
