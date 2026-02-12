
import type { Item } from "../../../types/Item";
import itemsData from "../items.json";

export function loadItems(): Item[] {
    return itemsData as Item[];
}