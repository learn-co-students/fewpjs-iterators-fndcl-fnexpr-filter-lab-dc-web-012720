// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(person => person.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(person => person.slice(0, letters.length) === letters);
}

function matchName(drivers, personName) {
    return drivers.filter(person => person.name === personName);
}