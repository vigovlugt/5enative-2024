export const Area = {
    C: "C",
    L: "L",
    MT: "MT",
    N: "N",
    Q: "Q",
    R: "R",
    S: "S",
    St: "ST",
    W: "W",
    Y: "Y",
} as const;
export type Area = (typeof Area)[keyof typeof Area];
