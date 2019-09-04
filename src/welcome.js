import React from "react";
import Registration from "./registration";
// import { HashRouter, Route, Redirect } from "react-router-dom";
// import Login from "./login";

export default function Welcome() {
    return (
        <div>
            {/* <HashRouter> */}
            <h1>MARTIAL ZUCKERNET</h1>
            <div>
                <Registration />
                {/*<Route exact path="/" component={Registration} />
                 <Route path="/login" component={Login} />
                 <Redirect path="*" to="/" */}
            </div>
            {/* </HashRouter> */}
        </div>
    );
}
