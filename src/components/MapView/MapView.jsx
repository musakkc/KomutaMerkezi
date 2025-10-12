import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { MAP_CENTER, MAP_ZOOM } from "../../utils/constants";
import "leaflet/dist/leaflet.css";
import "./MapView.css";

const MapView = () => {
    return (
        <div className="map-container">
            <MapContainer center={MAP_CENTER} zoom={MAP_ZOOM} className="map">
                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    );
};

export default MapView;
