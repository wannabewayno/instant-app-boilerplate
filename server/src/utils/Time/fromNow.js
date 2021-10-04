const { isPlural } = require('../Regex');
const Time = require('./Time');

module.exports = (n, unit = 'millisecond') => {
    unit = isPlural.test(unit)? unit.slice(0,-1) : unit;
    return new Date(Date.now() + n * new Time()[unit]);
}