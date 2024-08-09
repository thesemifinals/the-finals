import type { CSSProperties, ReactElement } from "react";
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
  leftValue?: string;
  rightTitle?: string;
  rightValue?: string;
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

interface TableProps {
  title: string;
  rows: RowProps[];
}

function Table({ title, rows }: TableProps) {
  return (
    <Container>
      <Box
        gridColumn="1/101"
        style={{
          textAlign: "center",
        }}
      >
        <b>{title}</b>
      </Box>
      {...rows
        .map((row) => {
          return Row(row);
        })
        .flat(1)}
    </Container>
  );
}

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
  const rows: RowProps[] = [
    {
      leftTitle: "Build",
      leftValue: build,
      rightTitle: "Family",
      rightValue: family,
    },
    {
      leftTitle: "Mag Size",
      leftValue: magSize.toString(),
      rightTitle: "Reload Time",
      rightValue: reloadTime.toString() + " seconds",
    },
    {
      leftTitle: "Damage (Body)",
      leftValue: damageBody.toString(),
      rightTitle: "Damage (Head)",
      rightValue: damageHead.toString(),
    },
    {
      leftTitle: "Falloff (Start)",
      leftValue: falloffStart.toString() + "m",
      rightTitle: "Falloff (Max)",
      rightValue: falloffMax.toString() + "m",
    },
    {
      leftTitle: "Max Falloff",
      leftValue: (maxFalloffMultiplier * 100).toString() + "%",
    },
  ];
  return <Table title={name} rows={rows} />;
}
