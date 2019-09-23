import React from "react";
import Map from "./map";

export class App extends React.Component {
    constructor() {
        super();
        this.state = {
            overlayIsVisible: false
        };
        this.showOverlay = this.showOverlay.bind(this);
        this.hideOverlay = this.hideOverlay.bind(this);
    }

    componentDidMount() {
        console.log("App mounted");
    }

    showOverlay() {
        this.setState({
            overlayIsVisible: true
        });
    }

    hideOverlay() {
        this.setState({
            overlayIsVisible: false
        });
    }

    render() {
        return (
            <React.Fragment>
                <h1>S h a d o w / A r c h i t e c t u r e</h1>
                <Map />
            </React.Fragment>
        );
    }
}
