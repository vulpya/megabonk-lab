import type { Entry } from "./Entry";

type WeaponType = 'projectile' | 'aoe';
type ScalingType = 'damage' | 'cit-chance' | 'crit-damage' | 'projectile-count' | 'projectile-speed' | 'size';
type SpecialEffect = 'fire';

export interface Weapon extends Entry {
    weaponType: WeaponType[];
    scaling: ScalingType[];
    specialEffect?: SpecialEffect;
}