import type { Entry } from "./Entry";

export type Rarity = 'common' | 'rare' | 'epic' | 'legendary';

export interface Item extends Entry {
    rarity: Rarity;
}