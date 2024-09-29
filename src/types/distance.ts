export const Distance = {
    day: "day",
    feet: "feet",
    hour: "hour",
    miles: "miles",
    minute: "minute",
    round: "round",
    self: "self",
    sight: "sight",
    touch: "touch",
    unlimited: "unlimited",
} as const;
export type Distance = (typeof Distance)[keyof typeof Distance];
