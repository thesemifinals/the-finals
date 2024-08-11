import type { ClassResource } from "../data/resources/classes";
import { AllWeapons } from "../data/resources/weapons";

export interface WeaponsForClassProps {
  cls: ClassResource;
}
export default function WeaponsForClass({ cls }: WeaponsForClassProps) {
  const weapons = AllWeapons.filter((weapon) => weapon.build.name === cls.name);
  return (
    <ul>
      {weapons.map((weapon) => (
        <li>
          <a href={weapon.link}>{weapon.name}</a>
        </li>
      ))}
    </ul>
  );
}
