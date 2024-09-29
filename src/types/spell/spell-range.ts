import { Distance } from "../distance";
import { rangeName } from "../range";
import { SpellRange } from "./spell";
import { Range } from "../range";

export function spellRange(range: SpellRange): string {
    switch (range.type) {
        case Range.point:
            return renderPoint(range);
        default:
            return renderArea(range);
    }
}

function renderPoint(range: SpellRange): string {
    const { type, amount } = range.distance;

    switch (type) {
        case Distance.self:
        case Distance.sight:
        case Distance.unlimited:
        case Distance.touch:
            return rangeName(type);
        default:
            return `${amount} ${amount === 1 ? getSingletonUnit(type) : type}`;
    }
}

function renderArea(range: SpellRange): string {
    const { amount } = range.distance;
    const areaStyle = getAreaStyleString(range.type);

    return `Self (${amount}-${getSingletonUnit(range.distance.type)}${areaStyle})`;
}

function getAreaStyleString(rangeType: Range): string {
    switch (rangeType) {
        case Range.sphere:
            return " radius";
        case Range.cube:
            return " cube";
        case Range.cone:
            return " cone";
        default:
            return ` ${rangeType}`;
    }
}

function getSingletonUnit(unit: Distance, isShort: boolean = false): string {
    switch (unit) {
        case Distance.feet:
            return isShort ? "ft." : "foot";
        case Distance.miles:
            return isShort ? "mi." : "mile";
        default:
            if (unit.endsWith("s")) return unit.slice(0, -1);
            return unit;
    }
}
