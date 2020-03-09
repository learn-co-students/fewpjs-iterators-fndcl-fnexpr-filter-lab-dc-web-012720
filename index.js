// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string) {
    let matchingDrivers = []
    drivers.forEach( driver => {
        if (driver.toLowerCase() === string.toLowerCase()) {
            matchingDrivers.push(driver)
        }
    })
    return matchingDrivers
}

function fuzzyMatch(drivers, substring) {
    let matchingDrivers = []
    drivers.forEach( driver => {
        if (driver.toLowerCase().startsWith(substring.toLowerCase())) {
            matchingDrivers.push(driver)
        }
    })
    return matchingDrivers
}

function matchName(drivers, name) {
    let matchingDrivers = []
    drivers.forEach( driver => {
        if (driver["name"].toLowerCase() === name.toLowerCase()) {
            matchingDrivers.push(driver)
        }
    })
    return matchingDrivers
}
