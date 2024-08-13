import type { ClassResource } from "../data/resources/classes";
import { AllGadgets } from "../data/resources/gadgets";

export interface GadgetsForClassProps {
  cls: ClassResource;
}
export default function WeaponsForClass({ cls }: GadgetsForClassProps) {
  const gadgets = AllGadgets.filter(
    (gadget) => gadget.builds.filter((b) => b.name === cls.name).length > 0
  );
  return (
    <ul>
      {gadgets.map((g) => (
        <li key={g.name}>
          <a href={g.link}>{g.name}</a>
        </li>
      ))}
    </ul>
  );
}
