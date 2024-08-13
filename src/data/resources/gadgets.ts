import {
  classHeavy,
  classLight,
  classMedium,
  type ClassResource,
} from "./classes";
import type { Resource } from "./core";

export interface GadgetResource extends Resource {
  charges: number;
  rechargeTime: number;
  builds: ClassResource[];
}

export const AntiGravityCube: GadgetResource = {
  name: "Anti-Gravity Cube",
  link: "/gadgets/anti-gravity-cube",
  slug: "gadgets/anti-gravity-cube",
  charges: 1,
  rechargeTime: 20,
  builds: [classHeavy],
};

export const APS: GadgetResource = {
  name: "APS",
  link: "/gadgets/aps",
  slug: "gadgets/aps",
  charges: 1,
  rechargeTime: 10,
  builds: [classMedium],
};

export const Barricade: GadgetResource = {
  name: "Barricade",
  link: "/gadgets/barricade",
  slug: "gadgets/barricade",
  charges: 2,
  rechargeTime: 20,
  builds: [classHeavy],
};

export const BreachCharge: GadgetResource = {
  name: "Breach Charge",
  link: "/gadgets/breach-charge",
  slug: "gadgets/breach-charge",
  charges: 2,
  rechargeTime: 26,
  builds: [classLight],
};

export const C4: GadgetResource = {
  name: "C4",
  link: "/gadgets/c4",
  slug: "gadgets/c4",
  charges: 1,
  rechargeTime: 20,
  builds: [classHeavy],
};

export const DataReshaper: GadgetResource = {
  name: "Data Reshaper",
  link: "/gadgets/data-reshaper",
  slug: "gadgets/data-reshaper",
  charges: 1,
  rechargeTime: 20,
  builds: [classMedium],
};

export const Defibrillator: GadgetResource = {
  name: "Defibrillator",
  link: "/gadgets/defibrillator",
  slug: "gadgets/defibrillator",
  charges: 1,
  rechargeTime: 20,
  builds: [classMedium],
};

export const DomeShield: GadgetResource = {
  name: "Dome Shield",
  link: "/gadgets/dome-shield",
  slug: "gadgets/dome-shield",
  charges: 1,
  rechargeTime: 20,
  builds: [classHeavy],
};

export const ExplosiveMine: GadgetResource = {
  name: "Explosive Mine",
  link: "/gadgets/explosive-mine",
  slug: "gadgets/explosive-mine",
  charges: 2,
  rechargeTime: 20,
  builds: [classMedium, classHeavy],
};

export const Flashbang: GadgetResource = {
  name: "Flashbang",
  link: "/gadgets/flashbang",
  slug: "gadgets/flashbang",
  charges: 2,
  rechargeTime: 20,
  builds: [classLight, classMedium, classHeavy],
};

export const FragGrenade: GadgetResource = {
  name: "Frag Grenade",
  link: "/gadgets/frag-grenade",
  slug: "gadgets/frag-grenade",
  charges: 2,
  rechargeTime: 20,
  builds: [classLight, classMedium, classHeavy],
};

export const GasGrenade: GadgetResource = {
  name: "Gas Grenade",
  link: "/gadgets/gas-grenade",
  slug: "gadgets/gas-grenade",
  charges: 2,
  rechargeTime: 20,
  builds: [classLight, classMedium, classHeavy],
};

export const GasMine: GadgetResource = {
  name: "Gas Mine",
  link: "/gadgets/gas-mine",
  slug: "gadgets/gas-mine",
  charges: 2,
  rechargeTime: 20,
  builds: [classMedium, classHeavy],
};

export const Gateway: GadgetResource = {
  name: "Gateway",
  link: "/gadgets/gateway",
  slug: "gadgets/gateway",
  charges: 1,
  rechargeTime: 20,
  builds: [classLight],
};

export const GlitchGrenade: GadgetResource = {
  name: "Glitch Grenade",
  link: "/gadgets/glitch-grenade",
  slug: "gadgets/glitch-grenade",
  charges: 2,
  rechargeTime: 20,
  builds: [classLight],
};

export const GlitchMine: GadgetResource = {
  name: "Glitch Mine",
  link: "/gadgets/glitch-mine",
  slug: "gadgets/glitch-mine",
  charges: 2,
  rechargeTime: 20,
  builds: [classMedium],
};

export const GooGrenade: GadgetResource = {
  name: "Goo Grenade",
  link: "/gadgets/goo-grenade",
  slug: "gadgets/goo-grenade",
  charges: 2,
  rechargeTime: 20,
  builds: [classLight, classMedium, classHeavy],
};

export const JumpPad: GadgetResource = {
  name: "Jump Pad",
  link: "/gadgets/jump-pad",
  slug: "gadgets/jump-pad",
  charges: 1,
  rechargeTime: 20,
  builds: [classMedium],
};

export const PyroMine: GadgetResource = {
  name: "Pyro Mine",
  link: "/gadgets/pyro-mine",
  slug: "gadgets/pyro-mine",
  charges: 2,
  rechargeTime: 20,
  builds: [classHeavy],
};

export const RPG: GadgetResource = {
  name: "RPG",
  link: "/gadgets/rpg",
  slug: "gadgets/rpg",
  charges: 1,
  rechargeTime: 20,
  builds: [classHeavy],
};

export const SmokeGrenade: GadgetResource = {
  name: "Smoke Grenade",
  link: "/gadgets/smoke-grenade",
  slug: "gadgets/smoke-grenade",
  charges: 2,
  rechargeTime: 20,
  builds: [classLight, classMedium, classHeavy],
};

export const SonarGrenade: GadgetResource = {
  name: "Sonar Grenade",
  link: "/gadgets/sonar-grenade",
  slug: "gadgets/sonar-grenade",
  charges: 2,
  rechargeTime: 20,
  builds: [classLight],
};

export const StunGun: GadgetResource = {
  name: "Stun Gun",
  link: "/gadgets/stun-gun",
  slug: "gadgets/stun-gun",
  charges: 1,
  rechargeTime: 20,
  builds: [classLight],
};

export const ThermalBore: GadgetResource = {
  name: "Thermal Bore",
  link: "/gadgets/thermal-bore",
  slug: "gadgets/thermal-bore",
  charges: 2,
  rechargeTime: 20,
  builds: [classLight],
};

export const ThermalVision: GadgetResource = {
  name: "Thermal Vision",
  link: "/gadgets/thermal-vision",
  slug: "gadgets/thermal-vision",
  charges: 0,
  rechargeTime: 10,
  builds: [classLight],
};

export const TrackingDart: GadgetResource = {
  name: "Tracking Dart",
  link: "/gadgets/tracking-dart",
  slug: "gadgets/tracking-dart",
  charges: 2,
  rechargeTime: 20,
  builds: [classLight],
};

export const VanishingBomb: GadgetResource = {
  name: "Vanishing Bomb",
  link: "/gadgets/vanishing-bomb",
  slug: "gadgets/vanishing-bomb",
  charges: 1,
  rechargeTime: 20,
  builds: [classLight],
};

export const Zipline: GadgetResource = {
  name: "Zipline",
  link: "/gadgets/zipline",
  slug: "gadgets/zipline",
  charges: 1,
  rechargeTime: 20,
  builds: [classMedium],
};

export const AllGadgets: GadgetResource[] = [
  AntiGravityCube,
  APS,
  Barricade,
  BreachCharge,
  C4,
  DataReshaper,
  Defibrillator,
  DomeShield,
  ExplosiveMine,
  Flashbang,
  FragGrenade,
  GasGrenade,
  GasMine,
  Gateway,
  GlitchGrenade,
  GlitchMine,
  JumpPad,
  GooGrenade,
  PyroMine,
  RPG,
  SmokeGrenade,
  SonarGrenade,
  StunGun,
  ThermalBore,
  ThermalVision,
  TrackingDart,
  VanishingBomb,
  Zipline,
];
