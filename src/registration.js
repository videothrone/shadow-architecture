import React from "react";
import axios from "./axios";
import { Link } from "react-router-dom";

export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first: "",
            last: "",
            email: "",
            password: "",
            error: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
    }
    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            },
            () => console.log("this.state: ", this.state)
        );
    }
    handleValidation() {
        this.setState({
            error: true
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        axios
            .post("/registration", {
                first: this.state.first,
                last: this.state.first,
                email: this.state.email,
                password: this.state.password
            })
            .then(response => {
                if (response.data.success === false) {
                    this.handleValidation();
                } else {
                    location.replace("/");
                }
            })
            .catch(function(error) {
                console.log("error in axios.post /registration: ", error);
            });
    }
    render() {
        return (
            <div id="registration">
                {this.state.error && (
                    <div className="error">
                        Oops, something went terribly wrong.
                    </div>
                )}
                <form>
                    <input
                        type="text"
                        name="first"
                        autoComplete="off"
                        placeholder="First Name"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="last"
                        autoComplete="off"
                        placeholder="Last Name"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="email"
                        autoComplete="off"
                        placeholder="Email Address"
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        autoComplete="off"
                        placeholder="Password"
                        onChange={this.handleChange}
                    />
                    <br />
                    <button onClick={this.handleSubmit} id="submit-button">
                        Register
                    </button>
                </form>
                <div className="center">
                    <p>
                        <Link to="/login">Login</Link>
                    </p>
                </div>
            </div>
        );
    }
}
