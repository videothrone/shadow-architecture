import React from "react";

export function Profilepic({ imageurl, first, last, showModal }) {
    console.log("imageurl:", imageurl);
    imageurl = imageurl || "/img/default.png";
    return (
        <div>
            <h2>
                I'm the presentational comp. My name is: {first} {last}
            </h2>
            <img onClick={showModal} src={imageurl} />
        </div>
    );
}
