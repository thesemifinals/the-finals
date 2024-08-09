import type { Resource } from "./core";

export interface ClassResource extends Resource {}

export const classLight: ClassResource = {
  name: "Light",
  link: "/classes/light",
  slug: "classes/light",
};

export const classMedium: ClassResource = {
  name: "Medium",
  link: "/classes/medium",
  slug: "classes/medium",
};

export const classHeavy: ClassResource = {
  name: "Heavy",
  link: "/classes/heavy",
  slug: "classes/heavy",
};

export const allClasses: ClassResource[] = [
  classLight,
  classMedium,
  classHeavy,
];
