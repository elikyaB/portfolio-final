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

// const o = +getComputedStyle(node).opacity;
// css: t => `opacity: ${t * o}`

let cipher = {'in': [], 'out': []}

function wordlock(node, {delay=0, duration=1000, tr, ind}) {
    console.log(tr, node.textContent, ind)
    const word = tr === 'in'? index[0] : index[0]
    cipher[tr].push()   
}

// in:wordlock="{{tr:'in', ind:index}}"
// out:wordlock="{{tr:'out', ind:index}}"