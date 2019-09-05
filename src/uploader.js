import React from "react";
import axios from "./axios";

export class Uploader extends React.Component {
    constructor() {
        super();
        this.state = {
            imageurl: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e) {
        console.log("handleChange is running");
        // console.log("file: ", e.target.files[0]);
        // console.log("e.target", e.target.files);
        this.file = e.target.files[0];
    }
    handleClick(e) {
        e.preventDefault();
        // console.log("this: ", this);
        var formData = new FormData();
        formData.append("file", this.file);
        axios
            .post("/upload", formData)
            .then(response => {
                // console.log("response.data.imageurl: ", response.data.imageurl);
                this.props.getImageUrl(response.data.imageurl);
            })
            .then(() => {
                this.props.hideModal();
            })
            .catch(function(error) {
                console.log("error in axios.post /upload: ", error);
            });
    }
    render() {
        return (
            <div>
                <h3>
                    <input
                        type="file"
                        name="file"
                        autoComplete="off"
                        accept="image/*"
                        id="img-upload"
                        onChange={this.handleChange}
                    />
                </h3>
                <button onClick={this.handleClick} id="submit-main">
                    S U B M I T
                </button>
                <p>
                    <div onClick={this.props.hideModal}>X</div>
                </p>
            </div>
        );
    }
}
