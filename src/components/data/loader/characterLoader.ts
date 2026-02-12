import type { Character } from "../../../types/Character";
import charactersData from "../characters.json";

export function loadCharacters(): Character[] {
    return charactersData as Character[];
}