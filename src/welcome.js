import React from "react";
import { HashRouter, Redirect } from "react-router-dom";

export default function Welcome() {
    return (
        <HashRouter>
            <div className="flex-container">
                <div>
                    <img src="img/teufelsberg.jpg" />
                </div>
                <Redirect path="*" to="/" />
            </div>
        </HashRouter>
    );
}
