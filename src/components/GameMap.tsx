import { useState } from "react";

import { ImageOverlay, MapContainer, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

export interface GameMapProps {
  mapImageURL: string;
}

export default function GameMap({ mapImageURL }: GameMapProps) {
  return (
    <MapContainer
      zoom={4}
      center={[25, 25]}
      bounds={[
        [0, 0],
        [50, 50],
      ]}
      style={{ width: "100%", height: "50vh" }}
    >
      <ImageOverlay
        url={mapImageURL}
        bounds={[
          [0, 0],
          [50, 50],
        ]}
      />
    </MapContainer>
  );
}
