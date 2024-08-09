import styled from "styled-components";

export interface WeaponTableProps {
  name: string;
  build: string;
  family: string;
  magSize: number;
  reloadTime: number;
  damageBody: number;
  damageHead: number;
  falloffStart: number;
  falloffMax: number;
  maxFalloffMultiplier: number;
}

const boxStyle = {
  outline: "0.1em solid grey",
  paddingLeft: "0.5em",
};

export default function WeaponTableProps({
  name,
  build,
  family,
  magSize,
  reloadTime,
  damageBody,
  damageHead,
  falloffMax,
  falloffStart,
  maxFalloffMultiplier,
}: WeaponTableProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(100, 1fr)",
        gridAutoRows: "minmax(1em, auto)",
        gap: "0px",
      }}
    >
      <div
        style={{
          gridRow: 1,
          gridColumn: "1/100",
          textAlign: "center",
          ...boxStyle,
        }}
      >
        {name}
      </div>
      <div style={{ gridRow: 2, gridColumn: "1/23", ...boxStyle }}>
        <b>Build</b>
      </div>
      <div style={{ gridRow: 2, gridColumn: "23/46", ...boxStyle }}>
        {build}
      </div>
      <div style={{ gridRow: 2, gridColumn: "54/77", ...boxStyle }}>
        <b>Family</b>
      </div>
      <div style={{ gridRow: 2, gridColumn: "77/100", ...boxStyle }}>
        {family}
      </div>
      <div style={{ gridRow: 3, gridColumn: "1/23", ...boxStyle }}>
        <b>Mag Size</b>
      </div>
      <div style={{ gridRow: 3, gridColumn: "23/46", ...boxStyle }}>
        {magSize}
      </div>
      <div style={{ gridRow: 3, gridColumn: "54/77", ...boxStyle }}>
        <b>Reload Time</b>
      </div>
      <div style={{ gridRow: 3, gridColumn: "77/100", ...boxStyle }}>
        {reloadTime.toString() + " seconds"}
      </div>

      <div style={{ gridRow: 4, gridColumn: "1/23", ...boxStyle }}>
        <b>Damage Body</b>
      </div>
      <div style={{ gridRow: 4, gridColumn: "23/46", ...boxStyle }}>
        {damageBody}
      </div>
      <div style={{ gridRow: 4, gridColumn: "54/77", ...boxStyle }}>
        <b>Damage Head</b>
      </div>
      <div style={{ gridRow: 4, gridColumn: "77/100", ...boxStyle }}>
        {damageHead}
      </div>

      <div style={{ gridRow: 5, gridColumn: "1/23", ...boxStyle }}>
        <b>Falloff Start</b>
      </div>
      <div style={{ gridRow: 5, gridColumn: "23/46", ...boxStyle }}>
        {falloffStart.toString() + "m"}
      </div>
      <div style={{ gridRow: 5, gridColumn: "54/77", ...boxStyle }}>
        <b>Falloff Max</b>
      </div>
      <div style={{ gridRow: 5, gridColumn: "77/100", ...boxStyle }}>
        {falloffMax.toString() + "m"}
      </div>

      <div style={{ gridRow: 6, gridColumn: "1/23", ...boxStyle }}>
        <b>Max Falloff</b>
      </div>
      <div style={{ gridRow: 6, gridColumn: "23/46", ...boxStyle }}>
        {(maxFalloffMultiplier * 100).toString() + "%"}
      </div>
    </div>
  );
}
