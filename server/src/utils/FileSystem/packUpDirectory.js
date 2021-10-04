const { readdirSync, statSync } = require('fs');
const path = require('path');

/**
 * Convenience function to read the contents of a dir, pack up the resources and export them as a module
 * Useage: module.exports = require(./packUpDirectory.js)(__dirname, excludeRegexp)
 * @param {String} dirname - The nodejs __dirname should be passed in to initialise. 
 */
module.exports = (dirname, { exclude, include } = {}) => {
    exclude = Array.isArray(exclude) ? exclude : [exclude].filter(v => v);
    include = Array.isArray(include) ? include : [include].filter(v => v);
    const test = value => regex => regex.test(value);

    // read the directory
    const subPaths = readdirSync(dirname);
   
    // turn paths into modules and return to caller
    return subPaths.reduce((modules, subPath) => {
        const stats = statSync(path.join(dirname, subPath));
        const [name] = subPath.split('.');
        if (stats.isDirectory()) { // Directory things
            if (name !== '__test__') modules[name] = require(path.join(dirname, subPath));
        } else { // File things
            if (exclude.length && exclude.some(test)) return modules; 
            if (include.length && !include.some(test)) return  modules;
            if (subPath === 'index.js') return modules; 
            modules[name] = require(path.join(dirname, subPath));
        }
        return modules;
    }, {});
}
