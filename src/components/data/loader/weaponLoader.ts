import type { Weapon } from "../../../types/Weapon";
import weaponsData from "../weapons.json";

export function loadWeapons(): Weapon[] {
    return weaponsData as Weapon[];
}