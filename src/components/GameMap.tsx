import { useState } from "react";

import { ImageOverlay, MapContainer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { Icon, LatLngExpression } from "leaflet";

interface NamedLocation {
  popup: string;
  position: LatLngExpression;
}

export interface GameMapProps {
  mapImageURL: string;
  cashouts: NamedLocation[];
  spawns: NamedLocation[];
}

export default function GameMap({
  mapImageURL,
  cashouts,
  spawns,
}: GameMapProps) {
  const cashoutIcon = new Icon({
    iconUrl: "/map-icons/cashout.png",
    iconSize: [40, 40],
  });

  return (
    <MapContainer
      zoom={3}
      center={[50, 50]}
      bounds={[
        [0, 0],
        [100, 100],
      ]}
      style={{ width: "100%", height: "50vh" }}
    >
      <ImageOverlay
        url={mapImageURL}
        bounds={[
          [0, 0],
          [75, 100],
        ]}
      />

      {cashouts.map((loc) => {
        return (
          <Marker position={loc.position} icon={cashoutIcon}>
            <Popup>{loc.popup}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
