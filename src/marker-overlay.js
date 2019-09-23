import React from "react";

export function MarkerOverlay(props) {
    console.log("Overlay props", props);

    return (
        <React.Fragment>
            {props.overlayIsVisible && (
                <div id="overlay-online-users">
                    <button onClick={() => props.setOverlayIsVisible(false)}>
                        X
                    </button>
                    <h2>{props.selectedPlace.properties.NAME}</h2>
                    <div></div>
                    <div>Address: </div>
                </div>
            )}
        </React.Fragment>
    );
}
