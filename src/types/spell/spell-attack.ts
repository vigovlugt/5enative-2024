export const SpellAttack = {
    melee: "M",
    ranged: "R",
} as const;
export type SpellAttack = (typeof SpellAttack)[keyof typeof SpellAttack];
