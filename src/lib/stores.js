import { writable } from "svelte/store";

export const w = writable(0)
export const h = writable(0)
export const y = writable(0)
export const projects = writable([])
export const start = writable(false)
export const typewriter = (node, { delay=0, speed=0.5, next=null, func }) => {
    const valid = (
        node.childNodes.length === 1 &&
        node.childNodes[0].nodeType === Node.TEXT_NODE
    )

    if (!valid) {
        throw new Error(`This transition only works on elements with a single text node child`)
    }

    const text = node.textContent;
    const duration = text.length / (speed * 0.01)

    return {delay, duration, tick: t => {
            const i = Math.trunc(text.length * t)
            node.textContent = text.slice(0, i)
            if (next && node.textContent === text) {
                func()
            }
        }
    }
}