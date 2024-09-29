export const Ends = {
    dispelled: "dispel",
    triggered: "trigger",
};
export type Ends = (typeof Ends)[keyof typeof Ends];

export function endsName(end: Ends) {
    switch (end) {
        case "dispel":
            return "dispelled";
        case "trigger":
            return "triggered";
    }
}
