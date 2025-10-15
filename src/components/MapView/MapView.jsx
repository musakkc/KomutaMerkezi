import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { MAP_CENTER, MAP_ZOOM, DAMAGE_TYPES } from "../../utils/constants";
import "leaflet/dist/leaflet.css";
import "./MapView.css";

// Custom marker oluşturma fonksiyonu
const createCustomIcon = (damageType) => {
    const config = DAMAGE_TYPES[damageType];
    return L.divIcon({
        className: 'custom-marker',
        html: `
            <div style="
                background-color: ${config.color};
                width: 32px;
                height: 32px;
                border-radius: 50% 50% 50% 0;
                transform: rotate(-45deg);
                border: 3px solid white;
                box-shadow: 0 3px 10px rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                justify-content: center;
            ">
                <span style="
                    transform: rotate(45deg);
                    font-size: 16px;
                ">${config.icon}</span>
            </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });
};

const MapView = ({ damages, selectedDamage, onDamageSelect }) => {
    return (
        <div className="map-container">
            <MapContainer center={MAP_CENTER} zoom={MAP_ZOOM} className="map">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                {damages.map((damage) => (
                    <Marker
                        key={damage.id}
                        position={damage.location}
                        icon={createCustomIcon(damage.type)}
                        eventHandlers={{
                            click: () => onDamageSelect && onDamageSelect(damage)
                        }}
                    >
                        <Popup>
                            <div className="damage-popup">
                                <h3>{damage.title}</h3>
                                <div className="popup-badge" style={{ 
                                    backgroundColor: DAMAGE_TYPES[damage.type].color 
                                }}>
                                    {DAMAGE_TYPES[damage.type].label}
                                </div>
                                <p><strong>Açıklama:</strong> {damage.description}</p>
                                <p><strong>Tespit Tarihi:</strong> {damage.detectedDate}</p>
                                {damage.assignedTeam && (
                                    <p><strong>Atanan Ekip:</strong> {damage.assignedTeam}</p>
                                )}
                                {damage.imageUrl && (
                                    <img 
                                        src={damage.imageUrl} 
                                        alt="Hasar görüntüsü"
                                        className="popup-image"
                                    />
                                )}
                                <p className="priority-badge">Öncelik: {damage.priority}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default MapView;
