import React from "react";
import axios from "axios";

export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     first: this.props.first,
        //     last: this.props.first,
        //     email: this.props.email
        // };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            },
            () => console.log("this.state: ", this.state)
        );
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
            .then(function() {
                location.replace("/");
            })
            .catch(function(error) {
                console.log("error in axios.post /registration: ", error);
            });
    }
    render() {
        return (
            <div>
                <div>
                    <img src="./img/coming-soon.png" id="welcome-logo" />
                </div>
                <form>
                    <input
                        required
                        type="text"
                        name="first"
                        autoComplete="off"
                        placeholder="First Name"
                        onChange={this.handleChange}
                    />
                    <input
                        required
                        type="text"
                        name="last"
                        autoComplete="off"
                        placeholder="Last Name"
                        onChange={this.handleChange}
                    />
                    <input
                        required
                        type="text"
                        name="email"
                        autoComplete="off"
                        placeholder="Email Address"
                        onChange={this.handleChange}
                    />
                    <input
                        required
                        type="password"
                        name="password"
                        autoComplete="off"
                        placeholder="Password"
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleSubmit} id="submit-button">
                        Register
                    </button>
                </form>
                <div className="center">
                    <p>
                        <a href="#">Log in</a>
                    </p>
                </div>
            </div>
        );
    }
}
