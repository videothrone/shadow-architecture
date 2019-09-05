import React from "react";
import { Profilepic } from "./profilepic";
import { Uploader } from "./uploader";
import axios from "./axios";

export class App extends React.Component {
    constructor() {
        super();
        this.state = {
            first: "",
            last: "",
            imageurl: "",
            uploaderIsVisible: false
        };
        this.showModal = this.showModal.bind(this);
        this.getImageUrl = this.getImageUrl.bind(this);
    }

    componentDidMount() {
        console.log("App mounted");
        //axios req to server find info about user req.session.userId
        //add it to state via setState
        // e.preventDefault();
        axios
            .get("/users", {
                first: this.state.first,
                last: this.state.last,
                imageurl: this.state.imageurl
            })
            .then(response => {
                console.log("MOUNT response:", response);
                this.setState({
                    imageurl: response.data.rows[0].imageurl,
                    first: response.data.rows[0].first,
                    last: response.data.rows[0].last
                });
            })
            .catch(function(error) {
                console.log("error in axios.post /users: ", error);
            });
    }

    //toggleModal()
    showModal() {
        this.setState({
            uploaderIsVisible: true
        });
    }

    getImageUrl(image) {
        this.setState({
            imageurl: image
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
                {this.state.uploaderIsVisible && (
                    <Uploader getImageUrl={this.getImageUrl} />
                )}
            </React.Fragment>
        );
    }
}
