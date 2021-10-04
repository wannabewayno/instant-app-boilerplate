const toSet = require('./toSet');

/**
 * calculates the setDifference from two input Arrays
 */
const setDifference = (a, b) => {
    [a, b] = toSet(a, b);
    return Array.from(new Set([...a].filter(x => !b.has(x))));
}

module.exports = setDifference;