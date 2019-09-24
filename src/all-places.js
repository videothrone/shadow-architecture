import React from "react";
import * as placesData from "./data/markers.json";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MarkerOverlay } from "./marker-overlay";

export default function AllPlaces(props) {
    return (
        <React.Fragment>
            <Router>
                <div className="all-places-container">
                    {placesData.places.map((place, index) => (
                        <div key={index} className="place-container animation">
                            <Link
                                to="/marker-overlay"
                                onClick={() => {
                                    props.setOverlayIsVisible(true);
                                    props.setSelectedPlace(place);
                                }}
                            >
                                <h2>{place.properties.NAME}</h2>
                                <img src={place.properties.IMAGEURL} />
                                <div className="all-places-description">
                                    {place.properties.DESCRIPTION}
                                </div>
                            </Link>
                        </div>
                    ))}
                    <Route
                        path="/marker-overlay"
                        render={() => (
                            <MarkerOverlay
                                selectedPlace={props.selectedPlace}
                                setOverlayIsVisible={props.setOverlayIsVisible}
                                overlayIsVisible={props.overlayIsVisible}
                            />
                        )}
                    />
                </div>
            </Router>
        </React.Fragment>
    );
}
