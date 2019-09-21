import React from "react";
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker
} from "react-google-maps";
import mapStyles from "./mapstyles";
import * as parksData from "./data/markers.json";

function googleMap() {
    return (
        <GoogleMap
            defaultZoom={12}
            defaultCenter={{ lat: 45.421532, lng: -75.697189 }}
            defaultOptions={{ styles: mapStyles }}
        >
            {parksData.features.map(park => (
                <Marker
                    key={park.properties.PARK_ID}
                    position={{
                        lat: park.geometry.coordinates[1],
                        lng: park.geometry.coordinates[0]
                    }}
                />
            ))}
        </GoogleMap>
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
