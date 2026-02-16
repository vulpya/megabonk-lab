import type { Tome } from "../../types/Tome";
import tomesData from "../tomes.json";

export function loadTomes(): Tome[] {
    return tomesData as Tome[];
}