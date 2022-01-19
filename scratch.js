function rollUp(node, {delay=0, duration=1000}) {
    return {delay, duration, css: t => `
        transform: rotateX(${-90+t*90}deg)
        translateZ(2vw)
    `}
}

function rollDown(node, {delay=0, duration=1000}) {
    return {delay, duration, css: t => `
        transform: rotateX(${90-t*90}deg)
        translateZ(2vw)
    `}
}

const o = +getComputedStyle(node).opacity;
css: t => `opacity: ${t * o}`