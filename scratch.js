const titles = ["coder", "programmer", "developer", "engineer"]
let title = "coder"

console.log(title)

function titleSwitch (t) {
    const current = titles.findIndex((w) => {return w === t})
    const next = current < titles.length-1 ? current+1 : 0
    title = titles[next]
    console.log(title)
    setTimeout(() => {titleSwitch(title)}, 3000)
}

titleSwitch(title)