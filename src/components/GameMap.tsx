import { useState } from "react";

import {
  ImageOverlay,
  MapContainer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { Icon, LatLngExpression, Map } from "leaflet";

interface NamedLocation {
  popup: string;
  position: LatLngExpression;
}

export interface GameMapProps {
  mapImageURL: string;
  cashouts: NamedLocation[];
  spawns: NamedLocation[];
}

interface CashoutIconProps {
  position: LatLngExpression;
  popup: string;
}

function CashoutIcon({ position, popup }: CashoutIconProps) {
  const [zoomLevel, setZoomLevel] = useState(3);

  const mapEvents = useMapEvents({
    zoomend: () => {
      setZoomLevel(mapEvents.getZoom());
    },
  });

  const cashoutIcon = new Icon({
    iconUrl: "/map-icons/cashout.png",
    iconSize: [10 * zoomLevel, 10 * zoomLevel],
  });

  return (
    <Marker position={position} icon={cashoutIcon}>
      <Popup>{popup}</Popup>
    </Marker>
  );
}

export default function GameMap({
  mapImageURL,
  cashouts,
  spawns,
}: GameMapProps) {
  return (
    <MapContainer
      zoom={2}
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
        return <CashoutIcon position={loc.position} popup={loc.popup} />;
      })}
    </MapContainer>
  );
}
