export const Range = {
    cone: "cone",
    cube: "cube",
    emanation: "emanation",
    line: "line",
    point: "point",
    sphere: "sphere",
    hemisphere: "hemisphere",
    cylinder: "cylinder",
    self: "self",
    touch: "touch",
    sight: "sight",
    unlimited: "unlimited",
    plane: "plane",
    special: "special",
    radius: "radius",
} as const;
export type Range = (typeof Range)[keyof typeof Range];

export function rangeName(type: Range): string {
    return {
        [Range.cone]: "Cone",
        [Range.cube]: "Cube",
        [Range.emanation]: "Emanation",
        [Range.line]: "Line",
        [Range.point]: "Point",
        [Range.sphere]: "Sphere",
        [Range.hemisphere]: "Hemisphere",
        [Range.cylinder]: "Cylinder",
        [Range.self]: "Self",
        [Range.touch]: "Touch",
        [Range.sight]: "Sight",
        [Range.unlimited]: "Unlimited",
        [Range.plane]: "Unlimited on the same plane",
        [Range.special]: "Special",
        [Range.radius]: "Radius",
    }[type];
}
