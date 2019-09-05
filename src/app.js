import React from "react";
import { Profilepic } from "./profilepic";
import { Uploader } from "./uploader";

export class App extends React.Component {
    constructor() {
        super();
        this.state = {
            first: "funky",
            last: "chicken",
            imageurl: "",
            uploaderIsVisible: false
        };
        this.showModal = this.showModal.bind(this);
    }

    componentDidMount() {
        console.log("App mounted");
        //axios req to server find info about user req.session.userId
        //add it to state via setState
    }

    //toggleModal()
    showModal() {
        this.setState({
            uploaderIsVisible: true
        });
    }

    render() {
        return (
            <React.Fragment>
                <a href="/logout">Logout</a>
                <h1>Hello from App</h1>
                <Profilepic
                    first={this.state.first}
                    last={this.state.last}
                    imageurl={this.state.imageurl}
                    showModal={this.showModal}
                />
                {this.state.uploaderIsVisible && <Uploader />}
            </React.Fragment>
        );
    }
}
