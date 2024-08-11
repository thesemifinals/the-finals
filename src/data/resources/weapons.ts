import {
  classHeavy,
  classLight,
  classMedium,
  type ClassResource,
} from "./classes";
import type { Resource } from "./core";

type WeaponFamily =
  | "Auto Rifle"
  | "Burst Rifle"
  | "Marksman Rifle"
  | "Shotgun"
  | "Melee"
  | "Pistol"
  | "Grenade Launcher"
  | "Misc";

interface RangedDamage {
  damageBody: number;
  damageHead?: number;
  falloff?: Falloff;
}

interface Falloff {
  start: number;
  end: number;
  maxMultiplier: number;
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
    falloff: {
      start: 30,
      end: 37.5,
      maxMultiplier: 0.45,
    },
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
    falloff: {
      start: 30,
      end: 37.5,
      maxMultiplier: 0.45,
    },
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
    falloff: {
      start: 36,
      end: 40,
      maxMultiplier: 0.55,
    },
  },
};

export const cl40: WeaponResource = {
  name: "CL-40",
  link: "/weapons/cl-40",
  slug: "weapons/cl-40",
  build: classMedium,
  family: "Grenade Launcher",
  magazineSize: 4,
  reloadTime: 4,
  damage: {
    damageBody: 93,
    damageHead: 93,
    falloff: {
      start: 0,
      end: 0,
      maxMultiplier: 0,
    },
  },
};

export const dagger: WeaponResource = {
  name: "Dagger",
  link: "/weapons/dagger",
  slug: "weapons/dagger",
  build: classLight,
  family: "Melee",
  magazineSize: 0,
  reloadTime: 0,
  damage: {
    damageBody: 50,
    damageHead: 320,
  },
};

export const dualBlades: WeaponResource = {
  name: "Dual Blades",
  link: "/weapons/dual-blades",
  slug: "weapons/dual-blades",
  build: classMedium,
  family: "Melee",
  magazineSize: 0,
  reloadTime: 0,
  damage: {
    damageBody: 60,
  },
};

export const flamethrower: WeaponResource = {
  name: "Flamethrower",
  link: "/weapons/flamethrower",
  slug: "weapons/flamethrower",
  build: classHeavy,
  family: "Misc",
  magazineSize: 30,
  reloadTime: 3.5,
  damage: {
    damageBody: 30,
  },
};

export const lh1: WeaponResource = {
  name: "LH1",
  link: "/weapons/lh1",
  slug: "weapons/lh1",
  build: classLight,
  family: "Marksman Rifle",
  magazineSize: 15,
  reloadTime: 2.7,
  damage: {
    damageBody: 48,
    damageHead: 96,
  },
};

export const m11: WeaponResource = {
  name: "M11",
  link: "/weapons/m11",
  slug: "weapons/m11",
  build: classLight,
  family: "Auto Rifle",
  magazineSize: 40,
  reloadTime: 1.7,
  damage: {
    damageBody: 16,
    damageHead: 24,
  },
};

export const mgl: WeaponResource = {
  name: "M32-GL",
  link: "/weapons/m32-gl",
  slug: "weapons/m32-gl",
  build: classHeavy,
  family: "Grenade Launcher",
  magazineSize: 6,
  reloadTime: 3.1,
  damage: {
    damageBody: 83,
  },
};

export const m60: WeaponResource = {
  name: "M60",
  link: "/weapons/m60",
  slug: "weapons/m60",
  build: classHeavy,
  family: "Auto Rifle",
  magazineSize: 70,
  reloadTime: 3.5,
  damage: {
    damageBody: 19,
    damageHead: 28.5,
  },
};

export const model1887: WeaponResource = {
  name: "Model 1887",
  link: "/weapons/model-1887",
  slug: "weapons/model-1887",
  build: classMedium,
  family: "Shotgun",
  magazineSize: 6,
  reloadTime: 4.3,
  damage: {
    damageBody: 128,
  },
};

export const r357: WeaponResource = {
  name: "R.357",
  link: "/weapons/r357",
  slug: "weapons/r357",
  build: classMedium,
  family: "Pistol",
  magazineSize: 6,
  reloadTime: 2.5,
  damage: {
    damageBody: 74,
    damageHead: 148,
  },
};

export const riotShield: WeaponResource = {
  name: "Riot Shield",
  link: "/weapons/riot-shield",
  slug: "weapons/riot-shield",
  build: classMedium,
  family: "Melee",
  magazineSize: 0,
  reloadTime: 0,
  damage: {
    damageBody: 84,
  },
};

export const sa1216: WeaponResource = {
  name: "SA1216",
  link: "/weapons/sa1216",
  slug: "weapons/sa1216",
  build: classHeavy,
  family: "Shotgun",
  magazineSize: 16,
  reloadTime: 3,
  damage: {
    damageBody: 78,
  },
};

export const sh1900: WeaponResource = {
  name: "SH1900",
  link: "/weapons/sh1900",
  slug: "weapons/sh1900",
  build: classLight,
  family: "Shotgun",
  magazineSize: 2,
  reloadTime: 2.5,
  damage: {
    damageBody: 195,
  },
};

export const sledgehammer: WeaponResource = {
  name: "Sledgehammer",
  link: "/weapons/sledgehammer",
  slug: "weapons/sledgehammer",
  build: classHeavy,
  family: "Melee",
  magazineSize: 0,
  reloadTime: 0,
  damage: {
    damageBody: 115,
    damageHead: 200,
  },
};

export const sr84: WeaponResource = {
  name: "SR-84",
  link: "/weapons/sr-84",
  slug: "weapons/sr-84",
  build: classLight,
  family: "Marksman Rifle",
  magazineSize: 6,
  reloadTime: 3.3,
  damage: {
    damageBody: 115,
    damageHead: 230,
  },
};

export const sword: WeaponResource = {
  name: "Sword",
  link: "/weapons/sword",
  slug: "weapons/sword",
  build: classLight,
  family: "Melee",
  magazineSize: 0,
  reloadTime: 0,
  damage: {
    damageBody: 74,
    damageHead: 140,
  },
};

export const throwingKnives: WeaponResource = {
  name: "Throwing Knives",
  link: "/weapons/throwing-knives",
  slug: "weapons/throwing-knives",
  build: classLight,
  family: "Misc",
  magazineSize: 0,
  reloadTime: 0,
  damage: {
    damageBody: 60,
    damageHead: 90,
  },
};

export const v9s: WeaponResource = {
  name: "V9S",
  link: "/weapons/v9s",
  slug: "weapons/v9s",
  build: classLight,
  family: "Pistol",
  magazineSize: 20,
  reloadTime: 1.3,
  damage: {
    damageBody: 37,
    damageHead: 55.5,
  },
};

export const xp54: WeaponResource = {
  name: "XP-54",
  link: "/weapons/xp-54",
  slug: "weapons/xp-54",
  build: classLight,
  family: "Auto Rifle",
  magazineSize: 30,
  reloadTime: 2.45,
  damage: {
    damageBody: 18,
    damageHead: 27,
  },
};

export const AllWeapons: WeaponResource[] = [
  akm,
  famas,
  fcar,
  cl40,
  dagger,
  dualBlades,
  flamethrower,
  lh1,
  m11,
  mgl,
  m60,
  model1887,
  r357,
  riotShield,
  sa1216,
  sh1900,
  sledgehammer,
  sr84,
  sword,
  throwingKnives,
  v9s,
  xp54,
];
