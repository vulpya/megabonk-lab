type EntryType = "item" | "character" | "weapon" | "tome";

export interface Entry {
    type: EntryType;
    id: string;
    name: string;
    description: string;
    image: string;
    unlock?: string;
}