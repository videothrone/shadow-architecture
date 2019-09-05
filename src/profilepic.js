import React from "react";

export function Profilepic({ imageurl, first, last, showModal }) {
    // this.state = { imageurl: "" };
    console.log("imageurl:", imageurl);
    imageurl = imageurl || "/img/default.png";
    return (
        <div>
            <h2>
                I&apos;m the presentational comp. My name is: {first} {last}
            </h2>
            <div id="user-img">
                <img onClick={showModal} src={imageurl} title={first} />
            </div>
        </div>
    );
}
