import React from "react";
// import axios from "./axios";
import Map from "./map";

export class App extends React.Component {
    constructor() {
        super();
        this.state = {
            uploaderIsVisible: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    componentDidMount() {
        console.log("App mounted");
        //axios req to server find info about user req.session.userId
        //add it to state via setState
        // e.preventDefault();
        // axios
        //     .get("/users", {
        //         first: this.state.first,
        //         last: this.state.last,
        //         imageurl: this.state.imageurl
        //     })
        //     .then(response => {
        //         console.log("MOUNT response:", response);
        //         this.setState({
        //             imageurl: response.data.rows[0].imageurl,
        //             first: response.data.rows[0].first,
        //             last: response.data.rows[0].last
        //         });
        //     })
        //     .catch(function(error) {
        //         console.log("error in axios.post /users: ", error);
        //     });
    }

    //toggleModal()
    showModal() {
        this.setState({
            uploaderIsVisible: true
        });
    }

    hideModal() {
        this.setState({
            uploaderIsVisible: false
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
                <h1>S h a d o w / A r c h i t e c t u r e</h1>
                <Map />
            </React.Fragment>
        );
    }
}
