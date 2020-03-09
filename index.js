// Code your solution here

let findMatching = (drivers, string) => {
  return drivers.filter( driver => driver.toUpperCase() === string.toUpperCase())
};


let fuzzyMatch = (drivers, string) => {
  return drivers.filter( driver => string.split("").includes( driver.split("")[0] ))
};

let matchName = (drivers, string) => {
  return drivers.filter( driver => driver.name === string )
};
