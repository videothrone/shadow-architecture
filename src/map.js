import React, { useState } from "react";
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";
import mapStyles from "./map-styles";
import * as placesData from "./data/markers.json";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MarkerOverlay } from "./marker-overlay";
import AllPlaces from "./all-places";

function googleMap() {
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [overlayIsVisible, setOverlayIsVisible] = useState(false);
    const [infoWindowIsVisible, setInfoWindowIsVisible] = useState(false);

    return (
        <Router>
            <GoogleMap
                defaultZoom={12}
                defaultCenter={{ lat: 52.520008, lng: 13.404954 }}
                defaultOptions={{ styles: mapStyles }}
            >
                {placesData.places.map(place => (
                    <Marker
                        key={place.properties.PLACE_ID}
                        position={{
                            lat: place.coordinates[0],
                            lng: place.coordinates[1]
                        }}
                        onClick={() => {
                            setSelectedPlace(place);
                            setInfoWindowIsVisible(true);
                        }}
                        icon={{
                            url: "./img/marker-brown.png",
                            scaledSize: new window.google.maps.Size(75, 75)
                        }}
                    />
                ))}

                {selectedPlace && infoWindowIsVisible && (
                    <InfoWindow
                        position={{
                            lat: selectedPlace.coordinates[0],
                            lng: selectedPlace.coordinates[1]
                        }}
                        onCloseClick={() => {
                            setSelectedPlace(null);
                        }}
                    >
                        <div className="info-window">
                            <h2>{selectedPlace.properties.NAME}</h2>
                            <img src={selectedPlace.properties.IMAGEURL} />
                            <div>{selectedPlace.properties.DESCRIPTION}</div>
                            <Link
                                to="/marker-overlay"
                                onClick={() => {
                                    setSelectedPlace(selectedPlace);
                                    setOverlayIsVisible(true);
                                    setInfoWindowIsVisible(false);
                                }}
                            >
                                Explore more...
                            </Link>
                            <div id="info-window-address">
                                {selectedPlace.properties.ADDRESS}
                                <div className="route" id="overlay-icon-marker">
                                    <a
                                        href={
                                            selectedPlace.properties.DIRECTION
                                        }
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <img
                                            src="/img/icon-brown.png"
                                            alt="Click for maps route"
                                        />
                                        <img
                                            src="/img/icon-black.png"
                                            className="overlay-icon icon-top"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </InfoWindow>
                )}

                <Route
                    path="/marker-overlay"
                    render={() => (
                        <MarkerOverlay
                            selectedPlace={selectedPlace}
                            setOverlayIsVisible={setOverlayIsVisible}
                            overlayIsVisible={overlayIsVisible}
                        />
                    )}
                />
            </GoogleMap>
            <AllPlaces
                selectedPlace={selectedPlace}
                setSelectedPlace={setSelectedPlace}
                setOverlayIsVisible={setOverlayIsVisible}
                overlayIsVisible={overlayIsVisible}
            />
        </Router>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(googleMap));

export default function Map() {
    return (
        <div id="map-container">
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAhTuaH6AhlsaXQe4pdCQ44kgRoogmNvLs`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={
                    <div
                        style={{ height: `80%`, border: `5px solid #bb7c66` }}
                    />
                }
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
}
