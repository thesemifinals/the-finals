import { useState, type ReactElement } from "react";

import {
  ImageOverlay,
  MapContainer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import type { LatLngExpression } from "leaflet";
import { Checkbox, Flex } from "antd";

interface NamedLocation {
  popup: string;
  position: LatLngExpression;
}

export interface GameMapProps {
  mapImageURL: string;
  markerSets: CustomMarkerMap;
}

interface CashoutIconProps {
  position: LatLngExpression;
  popup: ReactElement;
}

interface CustomMarkerProps {
  iconURL: string;
  popup: ReactElement;
  position: LatLngExpression;
}

interface CustomMarker {
  popup: string;
  position: LatLngExpression;
}

interface CustomMarkerSet {
  cashouts: CustomMarker[];
}

interface CustomMarkerMap {
  [key: string]: CustomMarkerSet;
}

const defaultZoomLevel = 3;

function CustomMarker({ iconURL, popup, position }: CustomMarkerProps) {
  const [zoomLevel, setZoomLevel] = useState(defaultZoomLevel);

  const mapEvents = useMapEvents({
    zoomend: () => {
      setZoomLevel(mapEvents.getZoom());
    },
  });

  const icon = new Icon({
    iconUrl: iconURL,
    iconSize: [10 * zoomLevel, 10 * zoomLevel],
  });

  return (
    <Marker position={position} icon={icon}>
      <Popup>{popup}</Popup>
    </Marker>
  );
}

function CashoutIcon({ position, popup }: CashoutIconProps) {
  return (
    <CustomMarker
      iconURL="/map-icons/cashout.png"
      popup={popup}
      position={position}
    />
  );
}

function MarkersForSet(markerSet: CustomMarkerSet) {
  return markerSet.cashouts.map((marker) => {
    return (
      <CashoutIcon
        {...marker}
        position={marker.position}
        popup={<p>{marker.popup}</p>}
      />
    );
  });
}

function RenderMarkers(markerSets: CustomMarkerMap, enabledMarkers: string[]) {
  const enabledMarkerSets = Object.keys(markerSets).filter((key) => {
    return enabledMarkers.includes(key);
  });

  return enabledMarkerSets
    .map((key) => {
      const markerSet = markerSets[key];
      return MarkersForSet(markerSet);
    })
    .flat(1);
}

export default function GameMap({ mapImageURL, markerSets }: GameMapProps) {
  const [enabledMarkers, setEnabledMarkers] = useState<string[]>([]);

  const onSelectedMarkersChanged = (selectedMarkers: string[]) => {
    setEnabledMarkers(selectedMarkers);
  };

  return (
    <Flex style={{ width: "100%", height: "50vh" }}>
      <MapContainer
        zoom={defaultZoomLevel}
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

        {...RenderMarkers(markerSets, enabledMarkers)}
      </MapContainer>
      <Checkbox.Group
        style={{ width: "25%", marginLeft: "1em", color: "grey" }}
        onChange={onSelectedMarkersChanged}
      >
        {Object.keys(markerSets).map((name) => {
          return (
            <Checkbox value={name} style={{ color: "grey", height: "1.5em" }}>
              {name}
            </Checkbox>
          );
        })}
      </Checkbox.Group>
    </Flex>
  );
}
