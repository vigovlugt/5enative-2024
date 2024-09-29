export const AbilityCheck = {
    charisma: "charisma",
    constitution: "constitution",
    dexterity: "dexterity",
    intelligence: "intelligence",
    strength: "strength",
    wisdom: "wisdom",
} as const;
export type AbilityCheck = (typeof AbilityCheck)[keyof typeof AbilityCheck];
