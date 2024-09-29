export const School = {
    abjuration: "A",
    conjuration: "C",
    divination: "D",
    enchantment: "E",
    illusion: "I",
    necromancy: "N",
    transmutation: "T",
    Evocation: "V",
} as const;
export type School = (typeof School)[keyof typeof School];

export function schoolName(s: School) {
    return {
        A: "Abjuration",
        C: "Conjuration",
        D: "Divination",
        E: "Enchantment",
        I: "Illusion",
        N: "Necromancy",
        T: "Transmutation",
        V: "Evocation",
    }[s];
}
