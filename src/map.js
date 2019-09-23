import React, { useState } from "react";
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";
import mapStyles from "./mapstyles";
import * as placesData from "./data/markers.json";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MarkerOverlay } from "./marker-overlay";

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
                            <h3>{selectedPlace.properties.NAME}</h3>
                            <p>{selectedPlace.properties.DESCRIPTION}</p>
                            <p>
                                <Link
                                    to="/marker-overlay"
                                    onClick={() => {
                                        setSelectedPlace(selectedPlace);
                                        setOverlayIsVisible(true);
                                        setInfoWindowIsVisible(false);
                                    }}
                                >
                                    Test
                                </Link>
                            </p>
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
        </Router>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(googleMap));

export default function Map() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAhTuaH6AhlsaXQe4pdCQ44kgRoogmNvLs`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `80%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
}
