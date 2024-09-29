export const Duration = {
    instant: "instant",
    permanent: "permanent",
    special: "special",
    timed: "timed",
} as const;
export type Duration = (typeof Duration)[keyof typeof Duration];
