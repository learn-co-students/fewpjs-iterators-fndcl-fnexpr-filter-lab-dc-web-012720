function findMatching(array, name) {
   return array.filter(item => {return item.toUpperCase() === name.toUpperCase()})
}

function fuzzyMatch(array, name) {
    return array.filter(item => {return item[0] === name[0]})
}

function matchName(array, name) {
    return  array.filter(
        item => {
            return item["name"] === name
        }
    )

}