import type { Entry } from "./Entry";

type ScalingType = 'damage' | 'cit-chance' | 'crit-damage' | 'projectile-count' | 'projectile-speed' | 'size';
type SpecialEffect = 'fire';

export interface Weapon extends Entry {
    scaling: ScalingType[];
    specialEffect?: SpecialEffect;
}