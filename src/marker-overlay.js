import React from "react";

export function MarkerOverlay(props) {
    return (
        <React.Fragment>
            {props.overlayIsVisible && (
                <div id="overlay-online-users">
                    <div id="marker-overlay-content-container">
                        <div
                            id="x"
                            onClick={() => props.setOverlayIsVisible(false)}
                        >
                            X
                        </div>
                        <h2>{props.selectedPlace.properties.NAME}</h2>
                        <div>
                            <img
                                src={props.selectedPlace.properties.IMAGEURL}
                            />
                        </div>
                        <div id="overlay-address">
                            {props.selectedPlace.properties.ADDRESS}
                        </div>
                        <div id="full-description">
                            {props.selectedPlace.properties.FULL_DESCRIPTION}
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}
