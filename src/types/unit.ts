export const Unit = {
    action: "action",
    bonus: "bonus",
    hour: "hour",
    minute: "minute",
    reaction: "reaction",
} as const;
export type Unit = (typeof Unit)[keyof typeof Unit];
