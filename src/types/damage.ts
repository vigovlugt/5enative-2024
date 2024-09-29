export const Damage = {
    acid: "acid",
    bludgeoning: "bludgeoning",
    cold: "cold",
    fire: "fire",
    force: "force",
    lightning: "lightning",
    necrotic: "necrotic",
    piercing: "piercing",
    poison: "poison",
    psychic: "psychic",
    radiant: "radiant",
    slashing: "slashing",
    thunder: "thunder",
} as const;
export type Damage = (typeof Damage)[keyof typeof Damage];
