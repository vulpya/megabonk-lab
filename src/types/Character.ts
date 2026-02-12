import type { Entry } from "./Entry";

interface Stat {
    value: string;
    scaling: string;
}

interface Passive {
    name: string;
    description: string;
}

export interface Character extends Entry {
    weapon: string;
    passive: Passive;
    stats: {
        evasion: Stat;
        luck: Stat;
        pickupRange: Stat;
        jumpHeight: Stat;
    }
}