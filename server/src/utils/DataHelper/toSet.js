/**
 * converts an arbitray amount of arrays to sets
 */
const toSet = (...arrays) => {
    return arrays.map(array => new Set(array));
}
module.exports = toSet;