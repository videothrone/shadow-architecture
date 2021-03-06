import React, { useState } from "react";

export function MarkerOverlay(props) {
    const [extendedImage, setExtendedImage] = useState(null);

    return (
        <React.Fragment>
            {props.overlayIsVisible && (
                <div id="marker-overlay" className="disable-scrollbars">
                    <div id="marker-overlay-content-container">
                        <div
                            id="x"
                            onClick={() => props.setOverlayIsVisible(false)}
                        >
                            X
                        </div>
                        <h2>{props.selectedPlace.properties.NAME}</h2>
                        <div
                            onClick={
                                extendedImage == null
                                    ? () => setExtendedImage("extended")
                                    : () => setExtendedImage(null)
                            }
                        >
                            <img
                                src={props.selectedPlace.properties.IMAGEURL}
                                className={extendedImage}
                            />
                        </div>
                        <div id="overlay-address">
                            {props.selectedPlace.properties.ADDRESS} |{" "}
                            <div className="route-marker" id="overlay-icon">
                                <a
                                    href={
                                        props.selectedPlace.properties.DIRECTION
                                    }
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <img
                                        src="/img/icon-black.png"
                                        alt="Click for maps route"
                                    />
                                    <img
                                        src="/img/icon-white.png"
                                        className="overlay-icon icon-top"
                                    />
                                </a>
                            </div>
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
