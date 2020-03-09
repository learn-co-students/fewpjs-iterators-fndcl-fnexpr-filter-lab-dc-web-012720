// Code your solution here
function findMatching(inArray, name) {
    let finalArray = inArray.filter(n => {
        return n.toLowerCase() === name.toLowerCase()
    })

    return finalArray
}

function fuzzyMatch(inArray, fLetter) {
    let finalArray = inArray.filter(n => {
        return n[0] === fLetter[0]
    })
    return finalArray
}

function matchName(drivers, string) {
    let finalArray = drivers.filter(n => {
        return n.name === string
    })

    return finalArray
}