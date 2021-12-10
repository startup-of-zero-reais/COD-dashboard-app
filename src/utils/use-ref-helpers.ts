import { RefObject } from "react";

export function snapTo( min: number, max: number, value: number ): number {
    return value < min ? min : value > max ? max : value;
}

export function maxScroll( wrapper: RefObject<HTMLDivElement> ): number {
    if (wrapper.current) {
        const childWidth = wrapper.current.children[0].clientWidth
        const currentWidth = wrapper.current.clientWidth

        return (childWidth - currentWidth)
    }
    return 0
}

export function itemWidth( wrapper: RefObject<HTMLDivElement> ): number {
    return ((wrapper.current?.children[0].children[0].clientWidth || 0) + 16) // 16 = 1 rem
}