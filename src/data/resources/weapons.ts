import { classMedium, type ClassResource } from "./classes";
import type { Resource } from "./core";

type WeaponFamily =
  | "Auto Rifle"
  | "Burst Rifle"
  | "Marksman Rifle"
  | "Shotgun"
  | "Melee"
  | "Pistol"
  | "Grenade Launcher";

interface RangedDamage {
  damageBody: number;
  damageHead: number;
  falloffStart: number;
  falloffMax: number;
  maxFalloffMultiplier: number;
}

export interface WeaponResource extends Resource {
  build: ClassResource;
  family: WeaponFamily;
  magazineSize: number;
  reloadTime: number;
  damage: RangedDamage;
}

export const akm: WeaponResource = {
  name: "AKM",
  link: "/weapons/akm",
  slug: "weapons/akm",
  build: classMedium,
  family: "Auto Rifle",
  magazineSize: 30,
  reloadTime: 2.3,
  damage: {
    damageBody: 20,
    damageHead: 30,
    falloffStart: 30,
    falloffMax: 37.5,
    maxFalloffMultiplier: 0.45,
  },
};

export const famas: WeaponResource = {
  name: "Famas",
  link: "/weapons/famas",
  slug: "weapons/famas",
  build: classMedium,
  family: "Burst Rifle",
  magazineSize: 24,
  reloadTime: 4,
  damage: {
    damageBody: 24,
    damageHead: 36,
    falloffStart: 30,
    falloffMax: 37.5,
    maxFalloffMultiplier: 0.45,
  },
};

export const fcar: WeaponResource = {
  name: "FCAR",
  link: "/weapons/fcar",
  slug: "weapons/fcar",
  build: classMedium,
  family: "Auto Rifle",
  magazineSize: 25,
  reloadTime: 2,
  damage: {
    damageBody: 22,
    damageHead: 33,
    falloffStart: 36,
    falloffMax: 40,
    maxFalloffMultiplier: 0.55,
  },
};
