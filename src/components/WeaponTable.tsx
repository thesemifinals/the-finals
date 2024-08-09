import type { CSSProperties, ReactElement } from "react";
import styled from "styled-components";

import "./style.css";
import type { WeaponResource } from "../data/resources/weapons";

export interface WeaponTableProps {
  weapon: WeaponResource;
}

interface ContainerProps {
  children: ReactElement | ReactElement[];
}

function Container({ children }: ContainerProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(100, 1fr)",
        gridAutoRows: "minmax(1em, auto)",
        gap: "0px",
        fontFamily: '"Bebas Neue", sans-serif',
        fontWeight: 400,
        fontStyle: "normal",
      }}
    >
      {children}
    </div>
  );
}

interface BoxProps {
  children: ReactElement | ReactElement[];
  style?: CSSProperties;
  gridColumn: string;
}

function Box({ children, style, gridColumn }: BoxProps) {
  return (
    <div
      style={{
        gridColumn: gridColumn,
        outline: "0.1em solid grey",
        paddingLeft: "0.5em",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

interface RowProps {
  leftTitle?: string;
  leftValue?: string | ReactElement;
  rightTitle?: string;
  rightValue?: string | ReactElement;
}

function Row({ leftTitle, leftValue, rightTitle, rightValue }: RowProps) {
  const boxes = [];

  if (leftValue) {
    boxes.push(
      <Box gridColumn="1/23">
        <b>{leftTitle}</b>
      </Box>
    );
    boxes.push(
      <Box gridColumn="23/46">
        <p>{leftValue}</p>
      </Box>
    );
  }

  if (rightValue) {
    boxes.push(
      <Box gridColumn="54/77">
        <b>{rightTitle}</b>
      </Box>
    );
    boxes.push(
      <Box gridColumn="77/101">
        <p>{rightValue}</p>
      </Box>
    );
  }

  return boxes;
}

function GetRows(rows: RowProps[]) {
  return rows
    .map((row) => {
      return Row(row);
    })
    .flat(1);
}

interface TableProps {
  title: string;
  rows: RowProps[];
}

function Table({ title, rows }: TableProps) {
  const elements = [
    <Box
      gridColumn="1/101"
      style={{
        textAlign: "center",
      }}
    >
      <b>{title}</b>
    </Box>,
    ...GetRows(rows),
  ];
  return <Container>{elements}</Container>;
}

export default function WeaponTableProps({ weapon }: WeaponTableProps) {
  const rows: RowProps[] = [
    {
      leftTitle: "Build",
      leftValue: <a href={weapon.build.link}>{weapon.build.name}</a>,
      rightTitle: "Family",
      rightValue: weapon.family,
    },
    {
      leftTitle: "Mag Size",
      leftValue: weapon.magazineSize.toFixed(0),
      rightTitle: "Reload Time",
      rightValue: weapon.reloadTime.toFixed(1) + " seconds",
    },
    {
      leftTitle: "Damage (Body)",
      leftValue: weapon.damage.damageBody.toString(),
      rightTitle: "Damage (Head)",
      rightValue: weapon.damage.damageHead.toString(),
    },
    {
      leftTitle: "Falloff (Start)",
      leftValue: weapon.damage.falloffStart.toFixed(1) + "m",
      rightTitle: "Falloff (Max)",
      rightValue: weapon.damage.falloffMax.toFixed(1) + "m",
    },
    {
      leftTitle: "Max Falloff",
      leftValue: (weapon.damage.maxFalloffMultiplier * 100).toFixed(1) + "%",
    },
  ];
  return <Table title={weapon.name} rows={rows} />;
}
